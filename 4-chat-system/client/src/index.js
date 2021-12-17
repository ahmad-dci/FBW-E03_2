import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/home';
export default function App() {
    return (
        <Router>
            <div>
                <h1>Welcome to our chat Application</h1>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
