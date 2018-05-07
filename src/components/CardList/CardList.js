import React from 'react';
import CardShow from '../CardShow/CardShow';
import './CardList.css';

const CardList = ({ data }) =>
    (
        <ul className="articles">
            {data.map(article => (<CardShow key={article.id} show={article} />))}
        </ul>
    )

export default CardList;