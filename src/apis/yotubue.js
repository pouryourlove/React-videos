import axios from "axios";

const KEY = "AIzaSyAyxiQYMaQMvtH41cnaHBbkgxkoEit_C0U";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
