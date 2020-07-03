import React from 'react';
import { Link } from 'react-router-dom';
import './BooksGrid.scss';

const BooksGridItem = (props) => {
    return (
        <div className="books__grid-item">
            <img src={props.photoUrl !== '' ? props.photoUrl : 'https://image.flaticon.com/icons/png/512/166/166088.png'} alt="" className="books__image" />
            <div className="books__content-wrap">
                <h3 className="books__content-item books__title">{props.title}</h3>
                <span className="books__content-item books__author">{props.author}</span>
                <Link className="books__content-item books__link" to={`/book/${props.id}`}>Details...</Link>
                <Link className="books__content-item books__link books__link--edit" to={`/editBook/${props.id}`}>Edit</Link>
                <button onClick={()=>props.deleteHandler(props.id)} className="books__content-item books__button">Delete</button>
            </div>
        </div>
    )
}

export default BooksGridItem;