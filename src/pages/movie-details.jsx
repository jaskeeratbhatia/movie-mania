import { Typography, IconButton, Stack } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import MovieAppBar from "../core-ui/movie-app-bar";
import MovieCard from "../components/movie-card";
import MovieTrailerCard from "../components/movie-trailer-card";

const MovieDetails = () => {
  let {
    state: { movieDetails },
  } = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    // check if data is available on mount otherwise redirect to `/`
    if (!movieDetails) {
      navigate("/");
    }
    // to scroll to top for movie banner and name to be visible
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MovieAppBar>
        <Stack direction={"row"}>
          <IconButton
            style={{ marginRight: "15px", padding: 0, color: "white" }}
            onClick={() => navigate("/")}
          >
            <ArrowBack />
          </IconButton>
          <Typography variant="h6">{t("movieDetails.header.text")}</Typography>
        </Stack>
      </MovieAppBar>
      <MovieCard movieDetails={movieDetails} />
      <MovieTrailerCard movieDetails={movieDetails} />
    </>
  );
};

export default MovieDetails;
