import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class BooksGrid extends React.Component {
    render () {
        console.log(`books list in props ${this.props.booksList}`);
        return (
            <>
            <Link to="/info">1
            </Link>
            <ul>
            {this.props.booksList.map((item)=> {
                return (
                    <li key={item.id}>{item.title}</li>
                )
            })}
            </ul>
            
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        booksList:state.booksList
    }
}

export default connect(mapStateToProps)(BooksGrid);