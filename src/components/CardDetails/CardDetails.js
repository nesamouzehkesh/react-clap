import React from 'react';
import './CardDetails.css';
import '../../icons.css';

const CardDetails = ({ currentArticle, renderMainList }) => (
    <div>
        <div className="details-container">
            <span className="fi-zoom-in">
                <span><b>Article Name: </b></span>
            </span>
            <p>{currentArticle.name}</p>

            <span className="fi-annotate">
                <span><b>Article Summary: </b></span>
            </span>
            <p>{currentArticle.summary}</p>

            <span className="fi-anchor"><a className="backlink" href={currentArticle.url}>
                Take me to the original posting
            </a></span>

            <ul className="footer">
                <li><a href="#" className="icon"><img src={require('./paw2.png')} alt="paw" /></a></li>
                <li><a href="#" className="icon fi-social-facebook"></a></li>
                <li><a href="#" className="icon fi-social-twitter"></a></li>
                <li><a href="#" className="icon fi-social-google-plus"></a></li>
            </ul>

        </div>
        <a onClick={() => renderMainList()} className="button">Back</a>
    </div>
)

export default CardDetails;