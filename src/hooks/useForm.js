import { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext'
import { db } from '../components/firebase/config'
import { addDoc, collection, documentId, getDocs, query, Timestamp, where, writeBatch } from 'firebase/firestore'
import { FormFail } from '../components/helpers/Alerts/FormFail';
import { CheckoutFail } from '../components/helpers/CheckoutFail';

export const useForm = (initialForm) => {

  const [values, setValues] = useState(initialForm)
  const [orderId, setOrderId] = useState(null)
  const {cart, totalCart, emptyCart} = useContext(CartContext)

  const handleInputChange = (e) =>{
    setValues({
      ...values, [e.target.name]: e.target.value
    })
  }

  const handleValidate = (e) =>{
    e.preventDefault()
    if (values.name === '' || values.email  === '' || values.tel  === '') {
        FormFail()
    }else{
        handleSubmit();
    }
  }


  const handleSubmit = async () =>{
      const order = {
      items: cart,
      total: totalCart(),
      buyer: {...values},
      date: Timestamp.fromDate(new Date())
    }
    const orderRef = collection(db, 'order')
    const batch = writeBatch(db)
    const productsRef = collection(db, 'products')
    const q = query(productsRef, where(documentId(), 'in', cart.map((item)=> item.id)))
    const products =  await getDocs(q)

    const outOfStock = []

    products.docs.forEach((doc) =>{
      const itemToUpdate = cart.find((item) => item.id === doc.id)
      const dataStock = doc.data().stock;

        if (dataStock >= itemToUpdate.Quantity) {
            batch.update(doc.ref, {
              stock: dataStock - itemToUpdate.Quantity
            })
        }else{
          outOfStock.push(itemToUpdate)
        }
    })

    if (outOfStock.length === 0) {
        batch.commit()
        addDoc (orderRef, order)
                  .then((doc) => {
                    setOrderId(doc.id)
                    emptyCart();
                   })
      
    }else{
      CheckoutFail()
    }
}

  return {
    values,
    orderId,
    handleInputChange,
    handleValidate,
  };
}; 