import React, { useContext } from 'react';
import { StorageContext } from '../contexts';
export default function Results() {
    const { mainState } = useContext(StorageContext);

    
    const productImgError = e => {
        // change the product image if it was broken
        e.target.src = '/link_broken.png';
        
        // delete the product if the image is broken
        // e.target.parentNode.remove();
    }
    if (mainState.dataStatus === 'done') {
        const images = mainState.products.map(product => {
            return (
                <div key={product.ikea_id} className="col-3">
                    <img
                        className="img-thumbnail"
                        onError={productImgError}
                        src={product.image}
                        alt={product.name} />
                </div>
            )
        })
        return (
            <div className="row">
                {images}
            </div>
        )
    } else {
        return (
            <div>
                no data
            </div>
        )
    }

}
