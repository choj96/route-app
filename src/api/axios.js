import axios from "axios";
// http://localhost:3000?api_key
const instance = axios.create({
  baseURL: "http://localhost:3000",
  params: {},
});
export default instance;
