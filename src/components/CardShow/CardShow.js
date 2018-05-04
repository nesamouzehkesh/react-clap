import React from 'react';
import './CardShow.css';

const CardShow = ({ show }) => {
    console.log(show.img);

    return (
        <li className="Card">
            <img src={show.image} alt="" className="author-image" />
            <h3>{show.name}</h3>
        </li>
    )
}

export default CardShow;