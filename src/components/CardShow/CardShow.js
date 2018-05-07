import React from 'react';
import './CardShow.css';

const CardShow = ({ article, findArticle }) => {
    console.log(article.img);

    return (
        <li className="Card">
            <img src={article.image} alt="" className="author-image" />
            <h3><a onClick={() => findArticle(article.id)}>{article.name}</a></h3>
        </li>
    )
}

export default CardShow;