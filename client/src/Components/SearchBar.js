import React, {Component} from 'react';
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeywordChange = this.handleKeywordChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }
  
  handleKeywordChange(e) {
    this.props.onKeywordChange(e.target.value);
    e.preventDefault();
  }

  handleSearchSubmit(e) {
    this.props.onSearchFormSubmit(e);
  }
  
  render() {
    return (
      <form onSubmit={this.handleSearchSubmit}>
        <input
          name="keyword"
          type="text"
          placeholder="Search..."
          value={this.props.keyword}
          onChange={this.handleKeywordChange}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default SearchBar;