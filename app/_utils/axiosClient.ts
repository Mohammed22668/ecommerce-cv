import axios from "axios";

const apikey = process.env.NEXT_PUBLIC_REST_API_KEY;
const apiUrl = "http://178.62.12.144:1337/api";

const axiosClient = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${apikey}`,
  },
});

export default axiosClient;
