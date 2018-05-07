import React from 'react';

const CardDetails = ({ currentArticle }) => (
    <div>
        <div>
            <h3>{currentArticle.name}</h3>
            <img src={currentArticle.image} />
            <a href={currentArticle.url}><p>Take me to the original posting</p></a>
        </div>
        <button>Back</button>
    </div>
)

export default CardDetails;