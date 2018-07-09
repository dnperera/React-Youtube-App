import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }
  onInputChange(term) {
    //update the state for term
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
  render() {
    return (
      <div className="search-bar">
        <input
          type="text"
          name="term"
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }
}
export default SearchBar;
