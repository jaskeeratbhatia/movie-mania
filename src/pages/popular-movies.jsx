import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import MovieAppBar from "../core-ui/movie-app-bar";
import AppButton from "../core-ui/app-button";
import {
  isLoading as isMovieDataLoading,
  movieData as movieDetails,
  currentPage,
  fetchMovies,
} from "../slices/movieSlice";
import { BASE_IMG_URL } from "../constants";

const PopularMovies = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isMovieDataLoading);
  const movieData = useSelector(movieDetails);
  const page = useSelector(currentPage);
  const { t } = useTranslation();

  useEffect(() => {
    if (!movieData?.length) {
      dispatch(fetchMovies(page));
    }
  }, []);

  return (
    <>
      <MovieAppBar>
        <Typography variant="h6">{t("popularMovies.header.text")}</Typography>
      </MovieAppBar>
      <Grid container>
        {movieData?.map((movie) => (
          <Grid item xs={6} sm={6} md={4} lg={2} xl={2} key={movie.id}>
            <Link
              to={`/movie-details/${movie.id}`}
              state={{ movieDetails: movie }}
            >
              <img
                src={`${BASE_IMG_URL}/${movie.poster_path}`}
                style={{ height: "100%", width: "100%" }}
              />
            </Link>
          </Grid>
        ))}
      </Grid>

      {isLoading ? (
        <Typography>{t("popularMovies.loading.text")}</Typography>
      ) : (
        <div style={{ padding: "8px" }}>
          <AppButton
            onClick={() => dispatch(fetchMovies(page))}
          >
            {t("popularMovies.btn.loadMore.text")}
          </AppButton>
        </div>
      )}
    </>
  );
};

export default PopularMovies;
