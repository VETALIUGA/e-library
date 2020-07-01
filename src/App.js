import React from 'react';
import './App.css';
import routes from './routes';
import { connect } from 'react-redux';
import {getBooksFromApi} from './redux/actions';

class App extends React.Component {
  state = {
    booksList:[
      {
        id:0,
        title:'',
        author:'',
        photoUrl:'',
        isbnNumber: 0,
        price: 0,
        language: ''
      }
    ]
  };
  

  getBooksListFromApi = async() => {
    const url = 'http://192.200.100.181:8081/rest/books';
    try {
      let response = await fetch(url);
      let list = await response.json();
      console.log(list);
      // this.setState({
      //   ...this.state,
      //   booksList:list
      // })
      this.props.onGetBooksFromApi(list);
    }
    catch(e) {
      console.log(e);
      
    }
  }

  componentDidMount () {
    this.getBooksListFromApi();
  }

  render() {
    return (
      <>
        {routes}
      </>
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
    onGetBooksFromApi:(booksList) => dispatch(getBooksFromApi(booksList))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
