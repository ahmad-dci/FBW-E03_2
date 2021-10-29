import React, { useContext } from 'react';
import { StorageContext } from '../contexts'

export default function Gallery() {
    const mainState = useContext(StorageContext);
    // task:
    // inside the return element we need to show the following text
    // 1- searchStatus = 'done' show [there is data]
    // 2- searchStatus = 'loading' show [pending...]
    // 3- searchStatus = 'error' show [can not get any image, try again later]
    // 4- searchStatus = 'no_data' show [can not find any image]
    let result = null;
    switch (mainState.state.searchStatus) {
        case 'done':
            //result = 'your data will be shown her';
            result = mainState.state.searchResult.map(image => {
                return (
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <div className="card" style={{width: '18rem', objectFit: 'cover' }}>
                            <img className="card-img-top" style={{height: '10rem'}} src={image.previewURL} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{image.user}</h5>
                                <p className="card-text">{image.tags}</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                )
            })

            break;
        case 'loading':
            result = 'loading...';
            break;
        case 'error':
            result = 'can not get any image, try again later';
            break;
        case 'no_data':
            result = 'No data to show';
            break;
        default:
            result = '';
            break;
    }
    return (
        <div className="row">
            {result}
        </div>
    )
}
