import React, {createContext, useReducer} from 'react';
import { chatState, reducer } from '../reducers';

export const ChatContext = createContext();
export const StorageProvider = ({children}) => {
    const [mainState, mainDispatcher] = useReducer(reducer, chatState);
return (
    <ChatContext.Provider value={{mainState, mainDispatcher}} >
        {children}
    </ChatContext.Provider>
)
}