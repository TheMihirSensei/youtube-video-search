import axios from "axios";
const KEY = "AIzaSyDcOQ0HA3MMdzwHPHrMAKki0c5oIxBTiAs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    key: KEY,
    type: "video",
  },
});
