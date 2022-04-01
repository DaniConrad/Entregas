import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../App.css'
import { viewAlert } from '../helpers/Alerts/AddedCartAlert';
import { ItemCount } from '../Cards/ItemCount';

export const ItemDetail = ({productDetail}) => {

    const {name, description, img, price, stock, id} = productDetail;

    const navigate = useNavigate()

    const handleNavigate = () =>{
        navigate(-1)
    }

    const [Quantity, SetQuantity] = useState(1);

    const addItemCart = () =>{
        const itemToAdd = {
            name,
            description,
            img,
            price,
            id,
            Quantity
        }
        viewAlert();
        console.log(itemToAdd);

    }


  return (
    <div className="detail-container container my-3">
        <div className="row">
            <div className="col-12 col-lg-6 d-flex justify-content-center">
                <div className="detail-img-container d-flex justify-content-center shadow ">
                    <img src={img} alt={name} title={name} className="detail-img"/>
                </div>
            </div>
            <div className="col-12 col-lg-6">
                <div className="detail-text-container d-flex flex-column align-items-center shadow ">
                    <h2 className="detail-price mt-3 fs-1">
                        {price}
                    </h2>
                    <h3 className="detail-title fs-2">
                        {name}
                    </h3>
                    <p className="detail-description mx-3 fs-5">
                        {description}
                    </p>
                    <ItemCount 
                        stock={stock}
                        id={id}
                        Quantity={Quantity}
                        SetQuantity={SetQuantity}
                        onAdd={addItemCart}

                    />
                    <p className='mt-1'>Disponible: {stock}</p>
                </div>
            </div>
        </div>
        <button className='btn btn-secondary m-3' onClick={handleNavigate}>Volver</button>

    </div>
  )
}
