import { createContext, useState } from "react"
import { LimitStock } from "../components/helpers/Alerts/LimitStock"

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

  const addItem = (item) =>{
    setCart([...cart, item])
  }

  const plusItemInCart = (id) =>{
    const valide = cart.find((prod) => prod.id === id)
    if (valide.Quantity === valide.stock) {
        LimitStock(valide.stock)
    }else{
      valide.Quantity++
    setCart([...cart])
    }
  } 

  const dashItemInCart = (id) =>{
    const valide = cart.find((prod) => prod.id === id)
    if (valide.Quantity <= 1) {
      return
    }else{
      valide.Quantity--
    }
    setCart([...cart])
  } 

  const cartQuantity = () => {
    return cart.reduce((acc, prod) => acc + prod.Quantity, 0)
  }

  const removeItem =  (id) => {
      setCart( cart.filter((prod) => prod.id !==id) )
  }

  const totalCart = () => {
    return cart.reduce((acc, prod) => acc + prod.price * prod.Quantity, 0)
  }

  const isInCart = (id) =>{
     return cart.some((prod) => prod.id === id)
  }

  const emptyCart = () =>{
    setCart([])
  }
  
  
  return(
  <CartContext.Provider value={{
    cart, 
    addItem,
    cartQuantity,
    removeItem,
    totalCart,
    plusItemInCart,
    isInCart,
    emptyCart,
    dashItemInCart,
  }}>
          {children}
      </CartContext.Provider>
  )
}

