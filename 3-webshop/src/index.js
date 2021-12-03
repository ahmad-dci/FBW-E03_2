import React from 'react'
import ReactDOM from 'react-dom'
import Results from './components/results'
import Search from './components/search'
import { StorageProvider } from './contexts'

function App() {
    return (
        <StorageProvider>
            <div className="container">
                <Search />
                <Results />
            </div>
        </StorageProvider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))


