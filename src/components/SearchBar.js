import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = { term: "" };
  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui searchbar">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field inputs">
            <label className="youtube-label">Youtube Video Search</label>
            <input
              type="text"
              name="first-name"
              value={this.state.term}
              placeholder="Search Your Favourite youtube video"
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
