import React, { Component } from "react";
import _ from "lodash";
import YTSearch from "youtube-api-search";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import { API_Key } from "../../keys";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
      term: ""
    };
    console.log("youtube key --", API_Key);
    this.videoSearch("Sri Lanka");
  }
  videoSearch(term) {
    //Grab  videos from youtube and update the state
    YTSearch(
      {
        key: API_Key,
        term: term
      },
      videos => {
        if (videos) {
          this.setState({
            videos: videos,
            selectedVideo: videos[0]
          });
        } else {
          this.setState({ videos: [] });
        }
      }
    );
  }
  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 500);
    return (
      <div>
        <div className="row">
          <div className="col-md-10">
            <SearchBar onSearchTermChange={videoSearch} />
          </div>
        </div>
        <div className="row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            videos={this.state.videos}
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          />
        </div>
      </div>
    );
  }
}

export default App;
