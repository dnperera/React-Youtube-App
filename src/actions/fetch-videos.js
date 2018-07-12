import axios from "axios";
import { FETCH_VIDEOS } from "./types";
import { API_Key } from "../../keys";

const ROOT_URL = "https://www.googleapis.com/youtube/v3/search";

export const fetchVideos = term => {
  var params = {
    part: "snippet",
    key: API_Key,
    q: term,
    type: "video"
  };

  var request = axios.get(ROOT_URL, { params: params });
  return {
    type: FETCH_VIDEOS,
    payload: request
  };
};
