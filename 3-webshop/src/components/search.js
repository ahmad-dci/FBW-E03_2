import React, {useState, useContext} from 'react'
import { getData } from '../api';
import { StorageContext } from '../contexts';
import { doneAction } from '../actions';

export default function Search() {
    // to make input controlled input we need to use useState hook 
    // and pass in an empty string as the initial value and then 
    // add onChange event handler to update the state 
    // and set value property to equal the value of the state
    const {setMainState} = useContext(StorageContext)

    const [searchWord, setSearchWord] = useState('');

    // create searchBtnClick event handler
    const searchBtnClick = async() => {
        //alert(searchWord)
        const data = await getData(searchWord)
        console.log(data.results[0].hits);
        setMainState(doneAction(data.results[0].hits))

    }
    
    return (
        <div className="row mt-3">
            <div className="col-12">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <button 
                        className="btn btn-outline-secondary" 
                        type="button"
                        onClick={searchBtnClick}
                        >Search</button>
                    </div>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="key word"
                    onChange={e => setSearchWord(e.target.value)}
                    value={searchWord} 
                    />
                </div>
            </div>
        </div>
    )
}
