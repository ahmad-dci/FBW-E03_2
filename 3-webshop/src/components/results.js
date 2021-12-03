import React, { useContext } from 'react';
import { StorageContext } from '../contexts';
export default function Results() {
    const { mainState } = useContext(StorageContext);
    if (mainState.dataStatus === 'done') {
        const images = mainState.products.map(product => {
            return (
                <div className="col-3">
                    <img
                        className="img-thumbnail"
                        key={product.ikea_id}
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
