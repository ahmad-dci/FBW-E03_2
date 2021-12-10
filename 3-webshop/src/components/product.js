import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { StorageContext } from '../contexts';

export default function Product() {
    const { mainState } = useContext(StorageContext);
    const { id } = useParams();
    const foundProduct = mainState.products.find(item => item.ikea_id === id)
    console.log(foundProduct);
    if (!foundProduct) {
        return <div>no data to show</div>
    } else {
        return (
            <div className='container'>
                <div className="row">
                    <h1>{foundProduct.name}</h1>
                    <h2>{foundProduct.price}Euro</h2>
                    <div className="col-6">
                        <h3>Description</h3>
                        <p>{foundProduct.description}</p>
                        <Link to='/'>products page</Link>
                    </div>
                    <div className="col-6">
                        <img src={foundProduct.image} alt={foundProduct.name} />
                    </div>
                </div>
            </div>
        )
    }

}
