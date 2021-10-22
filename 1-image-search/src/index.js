import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search';

export default function App() {
    return (
        <div className="container">
            <Search />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));


//create-react-app [app name] --use-npm 