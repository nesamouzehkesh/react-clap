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
            created: false,
        }

        this.setStateFromCurrentArticle = this.setStateFromCurrentArticle.bind(this);
    }

    componentDidMount() {
        this.setStateFromCurrentArticle(this.props.currentArticle);
    }

    setStateFromCurrentArticle(currentArticle) {
        this.setState({
            id: !currentArticle ? '' : currentArticle.id,
            name: !currentArticle ? '' : currentArticle.name,
            summary: !currentArticle ? '' : currentArticle.summary,
            url: !currentArticle ? '' : currentArticle.url,
        });
    }

    handleChangeId = (e) => {
        this.setState({
            id: e.target.value
        });
    }

    handleChangeName = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleChangeSummary = (e) => {
        this.setState({
            summary: e.target.value
        });
    }

    handleChangeUrl = (e) => {
        this.setState({
            url: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { id, name, summary, url } = this.state;

        if (this.props.currentArticle) {
            this.props.saveHandler(id, name, summary, url);
        } else {
            this.props.createHandler(id, name, summary, url);
        }

        this.setState({
            id: '',
            name: '',
            summary: '',
            url: '',
            created: true
        });
    }

    render() {
        const { renderMainList, showAddForm, currentArticle } = this.props;

        return (
            <form onSubmit={this.handleSubmit}>
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
                                onChange={this.handleChangeUrl}
                            />
                        </h2>
                        {/* <h2 className="row">
                            <span className="fi-paperclip"></span>
                            <label htmlFor="image">Article Image: </label>
                            <input
                                id="image"
                                type="file"
                                name="pic"
                                accept="file_extension"
                                value={this.state.image}
                                onChange={() => { }} />
                        </h2> */}
                        <input type="submit" value={Object.keys(currentArticle).length !== 0 ? 'Save' : 'Create'} />
                    </div>
                    <a onClick={() => renderMainList()} className="button">Back</a>
                </div>
            </form>)
    }

};

export default AddEditArticle;