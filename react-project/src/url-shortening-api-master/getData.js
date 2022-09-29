import axios from "axios";

const API_URL = "https://api.shrtco.de/v2/shorten?url";

// STUB: create instance of axios with API_URL as base URL
const newAxios = axios.create({
  baseURL: API_URL,
});

// STUB: create function to fetch data using axios
const fetchData = (link) => {
  return newAxios.get(`=${link}`);
};

export default fetchData;
