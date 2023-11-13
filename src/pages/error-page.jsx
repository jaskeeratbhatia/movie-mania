import React from "react";
import { Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import AppButton from "../core-ui/app-button";

const ErrorPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor="#212121"
    >
      <Typography
        data-testid="page-not-found"
        variant="h6"
        color="white"
        margin="24px"
      >
        {t("Page not found")}
      </Typography>

      <AppButton onClick={() => navigate("/")} dataTestid="home-button">
        {t("errorPage.btn.home.text")}
      </AppButton>
    </Stack>
  );
};

export default ErrorPage;
