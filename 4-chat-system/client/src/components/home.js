import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRooms } from '../api';
import { ChatContext } from '../contexts';
import {setRoomUserAction} from '../actions' 

export default function Home() {
    const [rooms, setRooms] = useState([]);
    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('');
    const {mainDispatcher} = useContext(ChatContext);
    const history = useNavigate();
    useEffect(() => {
        // IIFE (Immediately Invoked Function Expression)
        // (async() => {
        //     const rooms = await getRooms();
        //     setRooms(rooms);
        // })()
        const getData = async () => {
            const rooms = await getRooms();
            setRooms(rooms);
        }
        getData()
        
    }, [])

    const joinBtnClick = () => {
        mainDispatcher(setRoomUserAction(username, room))
        history(`/chat`)
    }

    const optionsElements = rooms.map((room, idx) => {
        return <option key={idx} value={room}>
            {room}
            </option>
    })
    return (
        <div>
            <h2>welcome to the home page</h2>
            <input 
            type="text" 
            placeholder="enter your name" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <select
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            >
                {optionsElements}
            </select>
            <br />
            <button onClick={joinBtnClick}>Join</button>
        </div>
    )
}
