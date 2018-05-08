import React from 'react';
import './CardDetails.css';
import '../../icons.css';

const CardDetails = ({ currentArticle }) => (
    <div className="main-container">
        <div className="details-container">
            <h2>
                <span className="fi-zoom-in"></span>
                <b>Article Name: </b>
                <span>{currentArticle.name}</span>
            </h2>
            <h2>
                <span className="fi-annotate"></span>
                <b>Article Summary: </b>
                <span>{currentArticle.summary}</span>
            </h2>
            <a href={currentArticle.url}>
                <span className="fi-anchor"></span>
                <span>Take me to the original posting</span>
            </a>
        </div>
        <a href="#" className="button">Back</a>
    </div>
)

export default CardDetails;