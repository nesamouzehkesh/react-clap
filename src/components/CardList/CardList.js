import React from 'react';
import CardShow from '../CardShow/CardShow';
import './CardList.css';

const CardList = ({ term, data, findArticle }) =>
    (

        <ul className="articles">
            {data
                .filter(article => `${article.name}`
                    .toUpperCase().indexOf(term.toLocaleUpperCase()) >= 0)
                .map(article => (<CardShow key={article.id} article={article} findArticle={findArticle} />))
            }
        </ul>
    )

export default CardList;

