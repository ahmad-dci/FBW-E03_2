import React, {createContext, useReducer} from 'react';
import {reducer, storage} from '../reducers'

export const StorageContext = createContext()
export const StorageProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, storage);
    return (
        <StorageContext.Provider value={{state, dispatch}}>
            {children}
        </StorageContext.Provider>
    )
}