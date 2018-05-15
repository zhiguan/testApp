import React, { Component } from 'react';
import $ from 'jquery';

import ImgurApp from './Components/ImgurApp';
import SearchBar from './Components/SearchBar';
import './App.css';

const viralImagesEndpoint = "http://localhost:3030/list";

class App extends Component {
  constructor(props){
  	super(props);
  	this.state = {
      sourceUrl: viralImagesEndpoint,
      items: []
    };

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleKeywordChange = this.handleKeywordChange.bind(this);
  }

  getResult(){
  	$.ajax({
  		url: this.state.sourceUrl,
  		dataType: 'json',
  		cache: false,
  		success: function(data){
  			this.setState({items : data});
  		}.bind(this),
  		error: function(xhr, status, error){
  			console.log(error);
  		}
  	})
  }

  getSearchUrl(keyword){
  	return "http://localhost:3030/search/"+keyword;
  }

  componentDidMount(){
  	this.getResult();
  }

  handleKeywordChange(keyword) {
    this.setState({sourceUrl : this.getSearchUrl(keyword)});
  }

  handleSearchSubmit(e) {
	this.getResult();
  	e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        CGI TEST APP
        <SearchBar onKeywordChange={this.handleKeywordChange} 
        		   onSearchFormSubmit={this.handleSearchSubmit} />
        <ImgurApp images={this.state.items} />
      </div>
    );
  }
}

export default App;
