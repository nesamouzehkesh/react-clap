import React from 'react';
import './AddEditArticle.css';

class AddEditArticle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            name: '',
            summary: '',
            url: '',
            image: '',
            created: false,
        }
    }

    componentDidMount() {
        console.log(this.props.currentArticle);
        this.setStateFromCurrentArticle(this.props.currentArticle);
    }

    setStateFromCurrentArticle(currentArticle) {
        console.log(currentArticle);
        this.setState({
            id: !currentArticle ? '' : currentArticle.id,
            name: !currentArticle ? '' : currentArticle.name,
            summary: !currentArticle ? '' : currentArticle.summary,
            url: !currentArticle ? '' : currentArticle.url,
            image: !currentArticle ? '' : currentArticle.image,
        });
        console.log(this.state);
    }


    render() {
        const { renderMainList, showAddForm } = this.props;



        return (
            <form >
                <div>
                    <div className="details-container">
                        <h2 className="row">
                            <span className="fi-paw"></span>
                            <label htmlFor="id">Article Id: </label>
                            <input
                                id="id"
                                placeholder="Enter a unique ID"
                                type="text"
                                value={this.state.id}
                                onChange={this.handleChangeId}
                            />
                        </h2>
                        <h2 className="row">
                            <span className="fi-zoom-in"></span>
                            <label htmlFor="name">Article Name: </label>
                            <input
                                id="name"
                                placeholder="Enter article name"
                                type="text"
                                value={this.state.name}
                                onChange={this.handleChangeName} />
                        </h2>
                        <h2 className="row">
                            <span className="fi-annotate"></span>
                            <label htmlFor="summary">Article Summary: </label>
                            <textarea
                                id="summary"
                                placeholder="Enter summary here, one per line"
                                type="text"
                                value={this.state.summary}
                                onChange={this.handleChangeSummary}></textarea>
                        </h2>
                        <h2 className="row">
                            <span className="fi-anchor"></span>
                            <label htmlFor="url">Article URL: </label>
                            <input
                                id="url"
                                placeholder="Enter article url"
                                type="text"
                                value={this.state.url}
                                onChange={this.state.url}
                            />
                        </h2>
                        <h2 className="row">
                            <span className="fi-paperclip"></span>
                            <label htmlFor="image">Article Image: </label>
                            <input
                                id="image"
                                type="file"
                                name="pic"
                                accept="image/*"
                                value={this.state.image}
                                onChange={() => { }} />
                        </h2>
                        <input type="submit" value={showAddForm ? 'Save' : 'Create'} />
                    </div>
                    <a onClick={() => renderMainList()} className="button">Back</a>
                </div>
            </form>)
    }

};

export default AddEditArticle;