import React, {useState, useContext} from 'react'
import { getData } from '../api';
import { StorageContext } from '../contexts';
import {loadingAction, doneAction, errorAction, noDataAction } from '../actions'
export default function Search() {
    const [searchWord, setSearchWord] = useState('');
    const mainState = useContext(StorageContext);

    const searchBtnClick = () => {
        mainState.dispatch(loadingAction());
        getData(searchWord).then(data => {
            if (data.hits.length) {
                mainState.dispatch(doneAction(data.hits))
            } else {
                mainState.dispatch(noDataAction())
            }
            
            console.log(data);
        }).catch(error => {
            mainState.dispatch(errorAction())
            console.log(error);
        })
    }

    console.log(mainState);
    return (
        <div className="row">
            <div className="col-12">
                <div className="input-group mb-3 mt-3">
                    <div className="input-group-prepend">
                        <button onClick={searchBtnClick} className="btn btn-outline-secondary" type="button">Search</button>
                    </div>
                    <input type="text"
                    className="form-control"
                    placeholder="Search Word"
                    value={searchWord}
                    onChange={e => setSearchWord(e.target.value)}
                        />
                </div>
            </div>
        </div>
    )
}
