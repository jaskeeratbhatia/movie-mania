import React from "react";
import { Button, Typography } from "@mui/material";

const AppButton = ({ children, onClick, dataTestid }) => {
  return (
    <Button
      style={{
        background: "#746A64",
        padding: "16px 24px",
      }}
      onClick={onClick}
      data-testid={dataTestid}
    >
      <Typography
        fontWeight={500}
        color="white"
        textTransform="none"
        fontSize={"16px"}
      >
        {children}
      </Typography>
    </Button>
  );
};

export default AppButton;
