import React, { Component } from 'react';
import data from './components/data';
import CardList from './components/CardList/CardList';
import Header from './components/Header/Header';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            term: '',
            showArticle: false
        }
    }


    changeHandler = (searchTerm) => {
        this.setState({
            term: searchTerm
        });
    }

    findArticle = (articleId) => {
        this.setState({
            showArticle: true
        })
        const theArticle = data.filter(article => article.id == articleId);
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
                    <CardList data={this.state.data} term={this.state.term} findArticle={this.findArticle} />
                </div>
            )
        } else {
            return (
                <div className="App">
                    <Header
                        title="Collection Search:"
                        add="Add"
                        data={this.state.data}
                        changeHandler={this.changeHandler}
                    />
                    <div>article details</div>
                </div>
            )
        }
    }

}

export default App;
