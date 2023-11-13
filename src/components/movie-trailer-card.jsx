import React from "react";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import TrailerButton from "../core-ui/trailer-button";

const MovieTrailerCard = ({ movieDetails }) => {
  const { t } = useTranslation();
  return (
    <div style={{ padding: "0px 24px" }}>
      <Typography
        variant="body2"
        fontWeight={500}
        color="#757575"
        borderBottom="1px solid #DEDEDE"
        data-testid="trailer-title"
      >
        {t("movieDetails.trailer.title.text")}
      </Typography>
      <div style={{ paddingBottom: "16px" }}>
        <TrailerButton
          onPlay={() =>
            console.log("Play Trailer handler 1 for movie id", movieDetails.id)
          }
        >
          {t("movieDetails.trailer1.btn.text")}
        </TrailerButton>
        <TrailerButton
          onPlay={() =>
            console.log("Play Trailer handler 2 for movie id", movieDetails.id)
          }
        >
          {t("movieDetails.trailer2.btn.text")}
        </TrailerButton>
      </div>
    </div>
  );
};

export default MovieTrailerCard;
