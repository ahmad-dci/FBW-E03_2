import React, { useState, useContext } from 'react'
import { getData } from '../api';
import { StorageContext } from '../contexts';
import { loadingAction, doneAction, errorAction, noDataAction } from '../actions'
export default function Search() {
    const [searchWord, setSearchWord] = useState('');
    const [color, setColor] = useState('');
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

    console.log(color);
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
            <div className="col-12">
                <div className="input-group mb-3 mt-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" >Color</label>
                    </div>
                    <select className="form-control" 
                    value={color}
                    onChange={e => setColor(e.target.value)}
                    >
                        <option value="">Choose...</option>
                        <option value="grayscale">grayscale</option>
                        <option value="transparent">transparent</option>
                        <option value="red">red</option>
                        <option value="orange">orange</option>
                        <option value="yellow">yellow</option>
                        <option value="green">green</option>
                        <option value="turquoise">turquoise</option>
                        <option value="blue">blue</option>
                        <option value="lilac">lilac</option>
                        <option value="pink">pink</option>
                        <option value="white">white</option>
                        <option value="gray">gray</option>
                        <option value="black">black</option>
                        <option value="brown">brown</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
