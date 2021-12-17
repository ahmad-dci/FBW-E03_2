import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { StorageProvider } from './contexts';

import Home from './components/home';
import Chat from './components/chat';
export default function App() {

    return (
        <Router>
            <StorageProvider>
            <div>
                <h1>Welcome to our chat Application</h1>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chat" element={<Chat />} />
            </Routes>
            </StorageProvider>
        </Router>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
