import React from 'react'

export default function Stars(props) {
    const starElements = [];
    for(let i = 1; i <= 5; i++) {
        if (i <= props.rate) {
            starElements.push(
                <span key={i} className='gold-star' ></span>
            )
        } else {
            starElements.push(
                <span key={i} className='gray-star' ></span>
            )
        }
    }
    return (
        <div>
            {starElements}
        </div>
    )
}
