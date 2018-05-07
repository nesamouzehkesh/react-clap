import React, { Component } from 'react';
import data from './components/data';
import CardList from './components/CardList/CardList';
import Header from './components/Header/Header';
import CardDetails from './components/CardDetails/CardDetails';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            term: '',
            showArticle: false,
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

    componentDidMount() {
        this.setState({
            data: data
        })
    }

    render() {


        if (!this.state.showArticle) {
            return (
                <div className="App">
                    <Header
                        title="Collection Search:"
                        add="Add"
                        data={this.state.data}
                        changeHandler={this.changeHandler}
                    />
                    <CardList data={this.state.data} term={this.state.term} renderArticle={this.renderArticle} />
                </div>
            )
        } else {
            const articleObject = this.state.currentArticle[0];
            return (
                <div className="App">
                    <Header
                        title="Collection Search:"
                        add="Add"
                        data={this.state.data}
                        changeHandler={this.changeHandler}
                    />
                    <CardDetails currentArticle={articleObject} />
                </div>
            )
        }
    }

}

export default App;
