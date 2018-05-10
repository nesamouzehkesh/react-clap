import React from 'react';
import './AddEditArticle.css';

class AddEditArticle extends React.Component {
    render() {
        const { renderMainList, showAddForm } = this.props;



        return (
            <form >
                <div>
                    <div className="details-container">
                        <h2 className="row">
                            <span className="fi-zoom-in"></span>
                            <b>Article Id: </b>
                            <input />
                        </h2>
                        <h2 className="row">
                            <span className="fi-zoom-in"></span>
                            <b>Article Name: </b>
                            <input />
                        </h2>
                        <h2 className="row">
                            <span className="fi-annotate"></span>
                            <b>Article Summary: </b>
                            <textarea></textarea>
                        </h2>
                        <h2 className="row">
                            <span className="fi-anchor"></span>
                            <b>Article URL: </b>
                            <input />
                        </h2>
                        <h2 className="row">
                            <span className="fi-eye"></span>
                            <b>Article Image: </b>
                            <input type="file" name="pic" accept="image/*" />
                        </h2>
                    </div>
                    <a onClick={() => renderMainList()} className="button">Back</a>
                </div>
            </form>)
    }

};

export default AddEditArticle;