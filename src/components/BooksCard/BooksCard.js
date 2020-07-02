import React from 'react';
import './BooksCard.scss';

import { connect } from 'react-redux';
import { getBookFromApi } from '../../redux/actions';

class BooksCard extends React.Component {
    getBookFromApi = async (id) => {
        const url = `http://192.200.100.181:8081/rest/books/${id}`;
        try {
            let response = await fetch(url);
            let item = await response.json();
            console.log(item);
            this.props.onGetBookFromApi(item);
        }
        catch (e) {
            console.log(e);

        }
    }
    componentDidMount() {
        const { match: { params } } = this.props;
        this.getBookFromApi(params.bookId);
        console.log(params);
    }

    render() {
        return (
            <section className="section card__section">
                <div className="container card__container">
                    <div className="card__grid">
                        <div className="card__grid-item">
                            <img className="card__book-photo" src={this.props.currentBook.coverPhotoURL !== '' ? this.props.currentBook.coverPhotoURL : 'https://image.flaticon.com/icons/png/512/166/166088.png'} alt="" />
                        </div>
                        <div className="card__grid-item">
                            <div className="card__content-wrap">
                                <h3 className="card__content-item card__book-title">{this.props.currentBook.title}</h3>
                                <h4 className="card__content-item card__book-author">by {this.props.currentBook.author}</h4>
                                <span className="card__content-item card__book-isbn">ISBN {this.props.currentBook.isbnNumber}</span>
                                <span className="card__content-item card__book-price">only {this.props.currentBook.price} <span className="card__book-price--currency">UAH</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentBook: state.currentBook
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetBookFromApi: (bookItem) => dispatch(getBookFromApi(bookItem))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksCard);