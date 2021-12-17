import React, { useState, useEffect } from 'react';
import { getRooms } from '../api';

export default function Home() {
    const [rooms, setRooms] = useState([]);
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

    const optionsElements = rooms.map((room, idx) => {
        return <option key={idx} value={room}>
            {room}
            </option>
    })
    return (
        <div>
            <h2>welcome to the home page</h2>
            <input type="text" placeholder="enter your name" />
            <br />
            <select>
                {optionsElements}
            </select>
        </div>
    )
}
