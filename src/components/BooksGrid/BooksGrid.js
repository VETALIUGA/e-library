import React from 'react';
import { Link } from 'react-router-dom';
import './BooksGrid.scss';
import BooksGridItem from './BooksGridItem';

import { connect } from 'react-redux';
import { getBooksFromApi } from '../../redux/actions';

class BooksGrid extends React.Component {
    getBooksListFromApi = async () => {
        const url = 'http://192.200.100.181:8081/rest/books';
        try {
            let response = await fetch(url);
            let list = await response.json();
            console.log(list);
            this.props.onGetBooksFromApi(list);
        }
        catch (e) {
            console.log(e);

        }
    }

    deleteBook = async (id) => {
        const url = `http://192.200.100.181:8081/rest/books/${id}`;
        try {
            let response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            let json = await response.json();
            this.getBooksListFromApi();
            if (!json.status) {
                this.setState({
                    isSuccess: true
                })
            } else {
                throw 'query failed';
            }
        }
        catch (e) {
            console.log(e);

        }
    }

    componentDidMount() {
        this.getBooksListFromApi();
    }

    render() {
        return (
            <section className="section books__section">
                <div className="container books__container">
                    <div className="books__grid">
                        {this.props.booksList.map((item) => {
                            return (
                                <BooksGridItem
                                    key={item.id}
                                    title={item.title}
                                    author={item.author}
                                    photoUrl={item.coverPhotoURL}
                                    id={item.id}
                                    deleteHandler={this.deleteBook}
                                />
                            )
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        booksList: state.booksList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetBooksFromApi: (booksList) => dispatch(getBooksFromApi(booksList))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksGrid);