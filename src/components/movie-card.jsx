import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import moment from "moment";
import AppButton from "../core-ui/app-button";
import { BASE_IMG_URL } from "../constants";

const MovieCard = ({ movieDetails }) => {
  const { t } = useTranslation();
  return (
    <>
      <div style={{ background: "#746A64", color: "white", padding: "16px" }}>
        <Typography variant="h6" data-testid="title">
          {movieDetails.original_title || movieDetails.title}
        </Typography>
      </div>
      <div style={{ padding: "24px" }}>
        <Grid container>
          <Grid item xs={5}>
            <img
              data-testid="movie-poster"
              src={`${BASE_IMG_URL}/${movieDetails.poster_path}`}
              style={{ width: "100%" }}
            ></img>
          </Grid>
          <Grid item xs={7} paddingLeft="16px">
            <Stack
              direction="column"
              height="100%"
              justifyContent="space-between"
            >
              <Typography
                variant="h6"
                fontWeight={400}
                data-testid="release-date"
              >
                {moment(movieDetails.release_date)?.year()}
              </Typography>
              <div>
                <Typography
                  variant="body2"
                  fontWeight={700}
                  marginBottom="16px"
                  data-testid="vote-average"
                >
                  {movieDetails.vote_average.toFixed(1)}/10
                </Typography>
                <AppButton dataTestid="add-to-favourite-btn">
                  {t("movieDetails.btn.addFavourite.text")}
                </AppButton>
              </div>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body2"
              fontWeight={500}
              color="#757575"
              marginTop="24px"
              data-testid="overview"
            >
              {movieDetails.overview}
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default MovieCard;
