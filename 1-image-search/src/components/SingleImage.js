import React, { useContext } from 'react';
import { StorageContext } from '../contexts'

// connect any component to the main state
// 1- import useContext from React
// 2- import the context Storage from Contexts file that we've created
export default function SingleImage() {
    const mainState = useContext(StorageContext);
    let result = null;
    if (mainState.state.chosenIdx !== null) {
        const url = mainState.state.searchResult[mainState.state.chosenIdx].largeImageURL
        result = <div className="row mb-5">
                    <img 
                    className="img-fluid" 
                    src={url} 
                    alt='the single ' />
                </div>
    }
    return (
        result
    )
}
