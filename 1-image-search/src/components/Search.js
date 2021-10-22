import React, {useState} from 'react'
import { getData } from '../api';
export default function Search() {
    const [searchWord, setSearchWord] = useState('');

    const searchBtnClick = () => {
        getData(searchWord).then(data => {
            console.log(data);
        }).catch(error => {
            console.log(error);
        })
    }

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
