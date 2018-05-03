import React from 'react';
import './CardShow.css';

const CardShow = ({ show }) => (
    <li className="Card">
        <img src={show.image} alt="" className="author-image" />
        <h3>{show.name}</h3>
        <a href={show.url} className="author-medium">Go to article on Medium</a>
    </li>
)

export default CardShow;