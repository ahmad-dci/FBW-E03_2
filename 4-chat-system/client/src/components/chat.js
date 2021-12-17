import React, {useEffect,useContext, useState} from 'react';
import { ChatContext } from '../contexts';
import { useNavigate } from 'react-router-dom';
import {io} from 'socket.io-client';


  
const chatDivStyle = {
    height: '500px',
    width: '500px',
    border: '1px solid black',
    backgroundColor: '#f5f5f5',
}

export default function Chat() {
    const [socket, setSocket] = useState(null);
    const {mainState} = useContext(ChatContext);
    const [message, setMessage] = useState('');
    const history = useNavigate();
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        if (!mainState.userName || !mainState.roomName) {
            history('/')
        }
        
        setSocket( io())
        
    }, []);

useEffect(() => {
    if (socket) {
        socket.on('connect', () => {
            console.log('connected to socket');
            socket.emit('room', {
                userName: mainState.userName, 
                roomName: mainState.roomName
            });
            
            socket.on('message', (data) => {
                console.log(messages);
                messages.push({message: data.message, userName: data.userName});
                setMessages([...messages])
            })
        })
    }
}, [socket])
    
    
    

    const sendMessage = () => {
        if (socket) {
            socket.emit('message', {
                message, 
                userName: mainState.userName, 
                roomName: mainState.roomName
            });
            //setMessages([...messages,{message: message, userName: mainState.userName} ])
            
        }
        
    }
    
    
    const messagesElements = messages.map((message, index) => {
        return (
            <p key={index}>
                {message.userName}: {message.message}
            </p>
        )
    })
    return (
        <div>
            <h3>{`Hi ${mainState.userName}, you are in ${mainState.roomName} Room` }</h3>
            <div style={chatDivStyle}>
                {messagesElements}
             </div>
            <input 
            type="text" 
            placeholder="Enter your message" 
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    )
}
