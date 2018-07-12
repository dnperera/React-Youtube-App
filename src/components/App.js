import React, { Component } from "react";
import _ from "lodash";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import { fetchVideos } from "../actions/fetch-videos";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
      term: ""
    };
    this.videoSearch("Docker");
  }
  videoSearch(term) {
    this.props.fetchVideos(term);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.videos) {
      this.setState({
        videos: nextProps.videos,
        selectedVideo: nextProps.videos[0]
      });
    }
  }
  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 500);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <div className="container">
          <div className="row bg-light  pt-2 px-4">
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
              videos={this.state.videos}
              onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            />
          </div>
        </div>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchVideos }, dispatch);
}
function mapStateToProps({ videos }) {
  return { videos };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
