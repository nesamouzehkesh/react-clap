import React from 'react';
import './CardShow.css';

const CardShow = ({ article, renderArticle }) => {
    return (
        <li className="Card">
            <img src={article.image} alt="" className="author-image" />
            <h3><a onClick={() => renderArticle(article.id)}>{article.name}</a></h3>
        </li>
    )
}


export default CardShow;