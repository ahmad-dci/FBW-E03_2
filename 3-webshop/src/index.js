import React from 'react'
import ReactDOM from 'react-dom'
import Results from './components/results'
import Search from './components/search'
import { StorageProvider } from './contexts'
import './app.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Product from './components/product'
function Main() {
    return <div className="container">
        <Search />
        <Results />
    </div>
}
function Contact() {
    return <div>
        <h2>this is contact page</h2>
        <Link to="/">home</Link>
        </div>
}
function App() {
    return (
        <StorageProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/products/:id" element={<Product/>} />
                </Routes>
            </Router>
        </StorageProvider>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))


