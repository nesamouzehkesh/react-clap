import React, { Component } from 'react';
import data from './components/data';
import CardList from './components/CardList/CardList';
import Header from './components/Header/Header';
import CardDetails from './components/CardDetails/CardDetails';
import AddEditArticle from './components/AddArticle/AddArticle';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            term: '',
            showArticle: false,
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
            showArticle: true,
            currentArticle: theArticle
        })
    }

    renderMainList = () => {
        this.setState({
            showArticle: false,
            showAddForm: false,
            currentArticle: null
        })
    }

    articleObject = () => {
        const articleObject = this.state.currentArticle[0];
        return articleObject;
    }

    addHandler = () => {
        this.setState({
            showAddForm: true,
            showArticle: false
        })
    }


    componentDidMount() {
        this.setState({
            data: data
        })
    }

    render() {
        return (
            <div className="App">
                <Header
                    title="Collection Search:"
                    add="Add"
                    data={this.state.data}
                    changeHandler={this.changeHandler}
                    addHandler={this.addHandler}
                    showArticle={this.state.showArticle}
                />

                <div>
                    {this.state.showArticle ?
                        <CardDetails currentArticle={this.articleObject()} renderMainList={this.renderMainList} />
                        :
                        this.state.showAddForm ?
                            <AddEditArticle renderMainList={this.renderMainList} /> :
                            <CardList data={this.state.data} term={this.state.term} renderArticle={this.renderArticle} />
                    }
                </div>

            </div>
        )

    }

}

export default App;
