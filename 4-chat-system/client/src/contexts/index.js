import React, {createContext, useReducer} from 'react';

export const ChatContext = createContext();
export const StorageProvider = ({children}) => {
return (
    <ChatContext.Provider >
        {children}
    </ChatContext.Provider>
)
}