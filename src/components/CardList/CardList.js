import React, { Component } from 'react';

const CardList = ({ data }) => {
    console.log(data);
    return (
        <ul>
            {data.map(article => (<li key={article.id}>{article.name}</li>))}
        </ul>
    )
}
export default CardList;