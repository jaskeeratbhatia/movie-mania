import axios from "axios";
import { BASE_MOVIE_API_URL } from "../constants";

export const getMovies = (page) => {
  return axios.get(
    `${BASE_MOVIE_API_URL}/3/movie/popular?page=${page}&api_key=${process.env.REACT_APP_API_KEY}`
  );
};
