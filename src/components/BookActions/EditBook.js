import React from 'react';
import './AddBook.scss';
import SectionArticle from '../SectionArticle/SectionArticle';

import { connect } from 'react-redux';
import { setBookToApi } from '../../redux/actions';
import BookForm from './BookForm';

class EditBook extends React.Component {

    state = {
        isSuccess: false
    }

    submitForm = async (e) => {
        e.preventDefault();
        console.log(this.props.match.params.bookId);
        const formValues = e.target;
        const newBook = { id: this.props.match.params.bookId };
        const url = 'http://192.200.100.181:8081/rest/books';
        for (let i = 0; i < formValues.length; i++) {
            if (formValues[i].name !== "") {
                newBook[formValues[i].name] = formValues[i].value;
            }
        }
        console.log(newBook);
        try {
            let response = await fetch(url, {
                method: 'PUT',
                body: JSON.stringify(newBook),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            let json = await response.json();
            if (!json.status) {
                this.setState({
                    isSuccess: true
                })
            } else {
                throw 'query failed';
            }
        }
        catch (e) {
            console.log("Error", e);
        }

    }

    render() {
        return (
            <section className="section add-book__section">
                <div className="container add-book__container">
                    <SectionArticle title="Edit book" class="add-book" />
                    <BookForm
                        submitForm={this.submitForm}
                        bookItem={this.props.booksList.find(item => item.id == this.props.match.params.bookId)}
                    />
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
        onSetBookToApi: (bookItem) => dispatch(setBookToApi(bookItem))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBook);