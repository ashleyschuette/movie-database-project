import React, { Component } from 'react';
import './stylesheets/main.css';
import get from './service/movies';
import logo from './movie.png';

import { getPopular } from './service/movies';

import SearchBox from './components/search';
import Card from './components/card';
import PopUp from './components/popUp';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      results: [],
      currentMovie: {},
      isPopUpOpen: false
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onCardClick = this.onCardClick.bind(this);
    this.onClose = this.onClose.bind(this);

  }

  componentDidMount() {
    getPopular(this.state.results).then(response => {
      this.setState({
        searchTerm: '',
        results: response
      })
    })
  }

  onCardClick(title) {
    var currentMovie = this.state.results.find((movie) => {
      return movie.original_title === title
    });
    this.setState({
      searchTerm: '',
      currentMovie: currentMovie,
      isPopUpOpen: !this.state.isPopUpOpen
    })
  } 

  onClose() {
    this.setState({
      isPopUpOpen: !this.state.isPopUpOpen
    })
    console.log("hello")
  }

  
  handleInputChange(e) {
    this.setState({
      searchTerm: e.target.value
    })
  }

  onFormSubmit(e) {
    e.preventDefault();
    if (this.state.searchTerm) {
      get(this.state.searchTerm).then(response => {
        this.setState({
          searchTerm: this.state.searchTerm,
          results: response
        })
      })
   }   
  }
  
  render() { 
    // let data = this.state.results.filter( results => results.poster_path ) 

    const results = this.state.results.map((result, index) => {
      return (
        <Card key={index} results={result} onCardClick={this.onCardClick}/>
      )
    })

    var popup = ''

    if (this.state.isPopUpOpen) {
      popup = (<PopUp currentMovie={this.state.currentMovie} onClose={this.onClose} />)
    } else {
      popup = ''
    }
   
    
    return (
      <div className="Main">
        <header className="header">
          <div className="logo">
            <img src={logo} width="175px" />
          </div>
        </header>
        <div>
          <SearchBox
            formSubmit={this.onFormSubmit}
            inputChange={this.handleInputChange} />
        </div>
        <div className="card-results" >
        {popup}
        {getPopular}
        {results}
        </div>  
      </div>
    );
  }
}

export default Main;
