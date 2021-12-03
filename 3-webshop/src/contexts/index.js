import React, {createContext, useReducer} from 'react';
import {reducer, storage} from '../reducers'


export const StorageContext = createContext();
export const StorageProvider = ({children}) => {
    const [mainState, setMainState] = useReducer(reducer, storage)
    return (
        <StorageContext.Provider value={{mainState, setMainState}}>
            {children}
        </StorageContext.Provider>
    )
}