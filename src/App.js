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
            currentArticle: {},
            toggle: false // toggle is true for any view other than the main list/page
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
            toggle: true
        })
    }

    renderMainList = () => {

        if (!this.state.showAddForm) { //means you visited an article but hit `Back` without editing
            this.setState({
                toggle: false,
                currentArticle: {}
            })
        } else {
            this.setState({
                showAddForm: false,
                toggle: false,
            })

        }
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
        const { data, currentArticle } = this.state;

        const editedArticle = Object.assign({}, currentArticle,
            {
                id: id,
                name: name,
                summary: summary,
                url: url
            });
        console.log(editedArticle);
        const newDataArray = data.map(article => article === currentArticle ? editedArticle : article);
        this.setState({
            data: newDataArray,
            showAddForm: false,
            toggle: true,
            currentArticle: editedArticle
        }, () => { console.log(this.state.data) });
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
        return (
            <div className="App">
                <Header
                    data={this.state.data}
                    changeHandler={this.changeHandler}
                    addHandler={this.addHandler}
                    showAddForm={this.state.showAddForm}
                    currentArticle={this.state.currentArticle}
                    editHandler={this.editHandler}
                    toggle={this.state.toggle}
                />

                <div>
                    {(Object.keys(this.state.currentArticle).length !== 0 && this.state.toggle) ?
                        this.state.showAddForm ?
                            <AddEditArticle
                                renderMainList={this.renderMainList}
                                showAddForm={this.state.showAddForm}
                                currentArticle={this.state.currentArticle}
                                saveHandler={this.saveHandler}
                            /> :
                            <CardDetails
                                currentArticle={this.state.currentArticle}
                                renderMainList={this.renderMainList}
                                showAddForm={this.state.showAddForm}
                            />
                        :
                        this.state.showAddForm ?
                            <AddEditArticle
                                renderMainList={this.renderMainList}
                                showAddForm={this.state.showAddForm}
                                currentArticle={this.state.currentArticle}
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
