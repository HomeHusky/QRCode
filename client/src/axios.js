import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://10.72.37.153:443/api/",
  withCredentials: true,
});
