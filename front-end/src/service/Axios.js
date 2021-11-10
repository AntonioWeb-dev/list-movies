import axios from "axios";

// set a base url to use an Axios instance when the client to make a request to my api
export const Axios = axios.create({
  baseURL: "http://localhost:3072/",
});
