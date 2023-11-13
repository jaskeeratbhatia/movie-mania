import React from "react";
import { AppBar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const MovieAppBar = ({ children }) => {
  return (
    <AppBar position="sticky" color="primary" style={{ background: "#212121" }}>
      <div
        style={{
          padding: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        data-testid="movie-app-bar"
      >
        {children}
        <IconButton style={{ padding: 0 }}>
          <MoreVertIcon style={{ fill: "white" }} />
        </IconButton>
      </div>
    </AppBar>
  );
};

export default MovieAppBar;
