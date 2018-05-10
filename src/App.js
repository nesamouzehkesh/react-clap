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
            showAddForm: false,
            currentArticle: []
        }
    }


    changeHandler = (searchTerm) => {
        this.setState({
            term: searchTerm
        });
    }

    renderArticle = (articleId) => {
        const theArticle = data.filter(article => article.id === articleId);
        this.setState({
            currentArticle: theArticle
        })
    }

    renderMainList = () => {
        this.setState({
            showAddForm: false,
            currentArticle: []
        })
    }

    articleObject = () => {
        const articleObject = this.state.currentArticle[0];
        return articleObject;
    }

    addHandler = () => {
        this.setState({
            showAddForm: true,
        })
    }

    editHandler = (currentArticle) => {
        this.setState({
            showAddForm: true,
        })
    }

    saveHandler = (id, name, summary, url) => {
        const { data } = this.state;
        const currentArticle = this.state.currentArticle[0];

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
            showAddForm: false,
            currentArticle: editedArticle,
        });
    }

    createHandler = () => { }

    componentDidMount() {
        this.setState({
            data: data
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setStateFromCurrentArticle(nextProps.currentArticle);
    }

    render() {
        console.log(this.state.currentArticle.length);
        return (
            <div className="App">
                <Header
                    data={this.state.data}
                    changeHandler={this.changeHandler}
                    addHandler={this.addHandler}
                    showAddForm={this.state.showAddForm}
                    currentArticle={this.articleObject()}
                    editHandler={this.editHandler}
                />

                <div>
                    {(this.state.currentArticle.length >= 1) ?
                        this.state.showAddForm ?
                            <AddEditArticle
                                renderMainList={this.renderMainList}
                                showAddForm={this.state.showAddForm}
                                currentArticle={this.articleObject()}
                                saveHandler={this.saveHandler}
                            /> :
                            <CardDetails
                                currentArticle={this.articleObject()}
                                renderMainList={this.renderMainList}
                                showAddForm={this.state.showAddForm}
                            />
                        :
                        this.state.showAddForm ?
                            <AddEditArticle
                                renderMainList={this.renderMainList}
                                showAddForm={this.state.showAddForm}
                                currentArticle={this.articleObject()}
                                createHandler={this.createHandler}
                            /> :
                            <CardList
                                data={this.state.data}
                                term={this.state.term}
                                renderArticle={this.renderArticle}
                            />
                    }
                </div>

            </div>
        )

    }

}

export default App;
