import React, { Component } from 'react';
import data from './components/data';
import CardList from './components/CardList/CardList';
import Header from './components/Header/Header';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            term: ''
        }
    }

    changeHandler = (searchTerm) => {
        this.setState({
            term: searchTerm
        });
    }

    componentDidMount() {
        this.setState({
            data: data
        })
    }

    render() {
        console.log(data);
        return (
            <div className="App">
                <Header
                    title="Collection Search:"
                    add="Add"
                    data={this.state.data}
                    changeHandler={this.changeHandler}
                />
                <CardList data={this.state.data} term={this.state.term} />
            </div>
        )
    }

}

export default App;
