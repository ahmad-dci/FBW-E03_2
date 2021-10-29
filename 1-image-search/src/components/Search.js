import React, { useState, useContext, useEffect } from 'react'
import { getData } from '../api';
import { StorageContext } from '../contexts';
import { loadingAction, doneAction, errorAction, noDataAction, extendAction } from '../actions'
export default function Search() {
    const [searchWord, setSearchWord] = useState('');
    const [color, setColor] = useState('');
    const [category, setCategory] = useState('');
    const [page, setPage] = useState(1);
    const mainState = useContext(StorageContext);


    const searchBtnClick = () => {
        mainState.dispatch(loadingAction());
        getData(searchWord, color, category).then(data => {
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

    useEffect(() => {
        const root = document.querySelector('#root')
        const scrollEvent = () => {
            if (root.offsetHeight + root.scrollTop >= root.scrollHeight) {
                console.log('scrolled to bottom')
                // to get next page data
                getData(searchWord, color, category, page + 1).then(data => {
                    if (data.hits.length) {
                        setPage(page + 1);
                        mainState.dispatch(extendAction(data.hits))
                    } else {
                        mainState.dispatch(noDataAction())
                    }
        
                    console.log(data);
                }).catch(error => {
                    mainState.dispatch(errorAction())
                    console.log(error);
                })
            }
        };

        if(mainState.state.searchResult.length) {
            root.addEventListener('scroll', scrollEvent)
        } else {
            root.removeEventListener('scroll', scrollEvent)
        }
        
        
    }, [mainState.state.searchResult])


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
            <div className="col-12">
                <div className="input-group mb-3 mt-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" >Category</label>
                    </div>
                    <select className="form-control"
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                    >
                        <option value="">Choose...</option>
                        <option value="backgrounds">backgrounds</option>
                        <option value="fashion">fashion</option>
                        <option value="nature">nature</option>
                        <option value="science">science</option>
                        <option value="education">education</option>
                        <option value="feelings">feelings</option>
                        <option value="health">health</option>
                        <option value="people">people</option>
                        <option value="religion">religion</option>
                        <option value="places">places</option>
                        <option value="animals">animals</option>
                        <option value="industry">industry</option>
                        <option value="computer">computer</option>
                        <option value="food">food</option>
                        <option value="sports">sports</option>
                        <option value="transportation">transportation</option>
                        <option value="travel">travel</option>
                        <option value="buildings">buildings</option>
                        <option value="business">business</option>
                        <option value="music">music</option>
                    </select>
                </div>
            </div>
            <div className="col-12">
                <nav >
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link" href="#">Previous</a>
                        </li>

                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
