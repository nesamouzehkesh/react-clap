import React from 'react';
import CardShow from '../CardShow/CardShow';

const CardList = ({ data }) =>
    (
        <ul>
            {data.map(article => (<CardShow key={article.id} show={article} />))}
        </ul>
    )

export default CardList;