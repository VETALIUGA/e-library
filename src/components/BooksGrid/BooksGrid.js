import React from 'react';
import './BooksGrid.scss';
import BooksGridItem from './BooksGridItem';

import { connect } from 'react-redux';
import { getBooksFromApi, deleteBookFromApi } from '../../redux/actions';

class BooksGrid extends React.Component {
    
    componentDidMount () {
        this.props.onGetBooksFromApi();
    }

    // deleteBook = async (id) => {
    //     const url = `http://192.200.100.181:8081/rest/books/${id}`;
    //     try {
    //         let response = await fetch(url, {
    //             method: 'DELETE',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         });
    //         let json = await response.json();
    //         this.getBooksListFromApi();
    //         if (!json.status) {
    //             this.setState({
    //                 isSuccess: true
    //             })
    //         } else {
    //             throw Error;
    //         }
    //     }
    //     catch (e) {
    //         console.log(e);

    //     }
    // }

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
                                    deleteHandler={this.props.onDeleteBookFromApi}
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
        onGetBooksFromApi: (booksList) => dispatch(getBooksFromApi(booksList)),
        onDeleteBookFromApi: (bookId) => dispatch(deleteBookFromApi(bookId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksGrid);