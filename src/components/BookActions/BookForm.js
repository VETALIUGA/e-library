import React from 'react';

const BookForm = (props) => {
    console.log('current book', props.bookItem)
    if (props.bookItem) {
        return (
            <form onSubmit={props.submitForm} className="add-book__form">
                <div className="add-book__form-item">
                    <label htmlFor="title" className="label add-book__form-label">Title</label>
                    <input className="input add-book__form-input" required type="text" name="title" id="title" defaultValue={props.bookItem.title} />
                </div>
                <div className="add-book__form-item">
                    <label htmlFor="author" className="label add-book__form-label">Author</label>
                    <input className="input add-book__form-input" type="text" name="author" id="author" defaultValue={props.bookItem.author} />
                </div>
                <div className="add-book__form-item">
                    <label htmlFor="coverPhotoURL" className="label add-book__form-label">Photo URL</label>
                    <input className="input add-book__form-input" type="url" name="coverPhotoURL" id="coverPhotoURL" defaultValue={props.bookItem.coverPhotoURL} />
                </div>
                <div className="add-book__form-item">
                    <label htmlFor="isbnNumber" className="label add-book__form-label">ISBN</label>
                    <input className="input add-book__form-input" type="text" name="isbnNumber" id="isbnNumber" defaultValue={props.bookItem.isbnNumber} />
                </div>
                <div className="add-book__form-item">
                    <label htmlFor="price" className="label add-book__form-label">Price</label>
                    <input className="input add-book__form-input" type="text" name="price" id="price" defaultValue={props.bookItem.price} />
                </div>
                <div className="add-book__form-item">
                    <label htmlFor="language" className="label add-book__form-label">Language</label>
                    <input className="input add-book__form-input" type="text" name="language" id="language" defaultValue={props.bookItem.language} />
                </div>
                <div className="add-book__form-item">
                    <input className="input add-book__form-submit" type="submit" value="Save changes" />
                </div>
            </form>
        )
    }
    else {
        return (
            <form onSubmit={props.submitForm} className="add-book__form">
                <div className="add-book__form-item">
                    <label htmlFor="title" className="label add-book__form-label">Title</label>
                    <input className="input add-book__form-input" required type="text" name="title" id="title" />
                </div>
                <div className="add-book__form-item">
                    <label htmlFor="author" className="label add-book__form-label">Author</label>
                    <input className="input add-book__form-input" type="text" name="author" id="author" />
                </div>
                <div className="add-book__form-item">
                    <label htmlFor="coverPhotoURL" className="label add-book__form-label">Photo URL</label>
                    <input className="input add-book__form-input" type="url" name="coverPhotoURL" id="coverPhotoURL" />
                </div>
                <div className="add-book__form-item">
                    <label htmlFor="isbnNumber" className="label add-book__form-label">ISBN</label>
                    <input className="input add-book__form-input" type="text" name="isbnNumber" id="isbnNumber" />
                </div>
                <div className="add-book__form-item">
                    <label htmlFor="price" className="label add-book__form-label">Price</label>
                    <input className="input add-book__form-input" type="text" name="price" id="price" />
                </div>
                <div className="add-book__form-item">
                    <label htmlFor="language" className="label add-book__form-label">Language</label>
                    <input className="input add-book__form-input" type="text" name="language" id="language" />
                </div>
                <div className="add-book__form-item">
                    <input className="input add-book__form-submit" type="submit" value="Save changes" />
                </div>
            </form>
        )
    }

}

export default BookForm;