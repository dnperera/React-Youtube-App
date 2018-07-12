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
      <div className="container-fluid">
        <div className="row  bg-dark">
          <div className="col-md-4  mt-3">
            <i className="fab fa-youtube fa-3x text-danger mr-4" />
          </div>
          <div className="col-md-4 mt-3">
            <form className="form-group">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  onChange={event => this.onInputChange(event.target.value)}
                  value={this.state.term}
                />
                <div className="input-group-append">
                  <button className="btn btn-success" type="submit">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default SearchBar;
