import React, { Component } from "react";
import { connect } from "react-redux";
class VideoList extends Component {
  renderList() {
    return this.props.videos.map((video, index) => {
      return (
        <li key={index} className="list-group-item">
          {video.title}
        </li>
      );
    });
  }

  render() {
    return <ul className="list-group col-md-4">{this.renderList()}</ul>;
  }
}
const mapStateToProps = state => {
  return { videos: state.videos };
};
export default connect(mapStateToProps)(VideoList);
// const VideoList = props => {
//   const videoItems = props.videos.map(video => {
//     return (
//       <VideoListItem
//         key={video.etag}
//         video={video}
//         onVideoSelect={props.onVideoSelect}
//       />
//     );
//   });
//   return <ul className="col-md-8 list-group">{videoItems}</ul>;
// };
// export default VideoList;
