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