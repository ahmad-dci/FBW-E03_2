import React from 'react'

export default function Search() {
    return (
        <div className="row mt-3">
            <div className="col-12">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <button className="btn btn-outline-secondary" type="button">Search</button>
                    </div>
                    <input type="text" className="form-control" placeholder="key word" />
                </div>
            </div>
        </div>
    )
}
