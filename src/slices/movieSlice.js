import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovies } from "../services/movieService";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (page) => {
    const response = await getMovies(page);
    return response.data.results || [];
  }
);

const initialState = { movieData: [], isLoading: false, page: 1 };
const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.movieData = [...state.movieData, ...action.payload];
        state.page = state.page + 1;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action.error.message);
      });
  },
});
export const movieData = (state) => state.movies.movieData;
export const isLoading = (state) => state.movies.isLoading;
export const currentPage = (state) => state.movies.page;

export default moviesSlice.reducer;
