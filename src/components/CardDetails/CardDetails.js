import React from 'react';
import './CardDetails.css';
import '../../icons.css';
import Clap from '../Clap/Clap';

const CardDetails = ({ currentArticle, renderMainList }) => (
    <div>
        <div className="details-container">
            <span className="fi-zoom-in">
                <span><b>Article Name: </b></span>
            </span>
            <p className="paragraph">{currentArticle.name}</p>

            <span className="fi-annotate">
                <span><b>Article Summary: </b></span>
            </span>
            <p className="paragraph">{currentArticle.summary}</p>

            <span className="fi-anchor">
                <a className="backlink" href={currentArticle.url}>
                    Take me to the original posting</a>
            </span>
            <Clap />

            <ul className="footer">
                <li><a href="#" className="icon fi-social-facebook"></a></li>
                <li><a href="#" className="icon fi-social-twitter"></a></li>
                <li><a href="#" className="icon fi-social-google-plus"></a></li>
            </ul>

        </div>
        <a onClick={() => renderMainList()} className="button">Back</a>
    </div>
)

export default CardDetails;