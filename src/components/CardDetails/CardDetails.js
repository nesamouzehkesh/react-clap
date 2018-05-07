import React from 'react';

const CardDetails = ({ currentArticle }) => (
    <div>
        <div>
            <h2>{currentArticle.name}</h2>
            <img src={currentArticle.image2x} />
            <a href={currentArticle.url}><p>Take me to the original posting</p></a>
        </div>
        <button>Back</button>
    </div>
)

export default CardDetails;