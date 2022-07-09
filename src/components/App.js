import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import Footer from "./Footer";
import "./App.css";

class App extends React.Component {
  state = { vidoes: [], videoSelect: null };
  onTermSubmit = async (term) => {
    let response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      vidoes: response.data.items,
      videoSelect: response.data.items[0],
    });
  };

  componentDidMount = () => {
    this.setState({ term: "Nauto is Awesome" });
    this.onTermSubmit("Nauto is Awesome");
  };

  onVideoSelect = (video) => {
    console.log("video from app: ", video);
    this.setState({ videoSelect: video });
  };

  render() {
    return (
      <div className="ui container main-container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div
          className="ui grid"
          style={{ marginTop: "10px", padding: "0 15px" }}
        >
          <div className="ui row">
            <div className="ten wide column">
              <VideoDetail video={this.state.videoSelect} />
            </div>
            <div className="six wide column">
              <VideoList
                videos={this.state.vidoes}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
