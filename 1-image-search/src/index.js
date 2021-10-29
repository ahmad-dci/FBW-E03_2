import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/Gallery';
import Search from './components/Search';
import SingleImage from './components/SingleImage';
import { StorageProvider } from './contexts';

export default function App() {
    return (
        <StorageProvider>
            <div className="container">
                <Search />
                <SingleImage />
                <Gallery />
            </div>
        </StorageProvider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));


//create-react-app [app name] --use-npm 
// to create a global storage for the app:
// 1- create a folder called reducers and inside a file called index.js
// 2- create a folder called actions and inside a file called index.js
// 3- create a folder called contexts and inside a file called index.js