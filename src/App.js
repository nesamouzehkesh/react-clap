import React, { Component } from 'react';
import data from './components/data';
import CardList from './components/CardList/CardList';
import Header from './components/Header/Header';
import CardDetails from './components/CardDetails/CardDetails';
import AddEditArticle from './components/AddEditArticle/AddEditArticle';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            term: '',
            showForm: false,
            currentArticle: null,
        }
    }

    changeHandler = (searchTerm) => {
        this.setState({
            term: searchTerm
        });
    }

    renderArticle = (articleId) => {
        const selected = this.state.data.filter(article => article.id === articleId);
        const theArticle = selected[0];
        this.setState({
            currentArticle: theArticle,
        })
    }

    deleteArticle = (articleId) => {
        const filteredData = this.state.data.filter(article => article.id !== articleId);
        this.setState({
            data: filteredData
        })
    }

    renderMainList = () => {
        if (!this.state.showForm) {
            this.setState({
                currentArticle: null
            })
        } else {
            this.setState({
                showForm: false,
            })
        }
    }

    showAddEditFormHandler = () => {
        this.setState({
            showForm: true,
        })
    }

    saveHandler = (id, name, summary, url) => {
        const { data, currentArticle } = this.state;

        const editedArticle = Object.assign({}, currentArticle,
            {
                id: id,
                name: name,
                summary: summary,
                url: url
            });
        const newDataArray = data.map(article => article === currentArticle ? editedArticle : article);
        this.setState({
            data: newDataArray,
            showForm: false,
            currentArticle: editedArticle,
        });
    }

    createHandler = (id, name, summary, url) => {
        const newDataArray = this.state.data.concat({
            id: id,
            name: name,
            summary: summary,
            url: url
        });

        this.setState({
            data: newDataArray
        });
    }

    componentDidMount() {
        this.setState({
            data: data
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setStateFromCurrentArticle(nextProps.currentArticle);
    }

    /** some getters for more readbility */
    get articleSelected() {
        return this.state.currentArticle !== null;
    }

    render() {
        return (
            <div className="App">
                <Header
                    data={this.state.data}
                    changeHandler={this.changeHandler}
                    showForm={this.state.showForm}
                    currentArticle={this.state.currentArticle}
                    showAddEditFormHandler={this.showAddEditFormHandler}
                />

                <div>
                    {this.articleSelected ?
                        this.state.showForm ?
                            <AddEditArticle
                                renderMainList={this.renderMainList}
                                showForm={this.state.showForm}
                                currentArticle={this.state.currentArticle}
                                saveHandler={this.saveHandler}
                            /> :
                            <CardDetails
                                currentArticle={this.state.currentArticle}
                                renderMainList={this.renderMainList}
                                showForm={this.state.showForm}
                            />
                        :
                        this.state.showForm ?
                            <AddEditArticle
                                renderMainList={this.renderMainList}
                                showForm={this.state.showForm}
                                currentArticle={this.state.currentArticle}
                                createHandler={this.createHandler}
                            /> :
                            <CardList
                                data={this.state.data}
                                term={this.state.term}
                                renderArticle={this.renderArticle}
                                deleteArticle={this.deleteArticle}
                            />
                    }
                </div>

            </div>
        )

    }

}

export default App;