import React from "react";
import { Typography, Button } from "@mui/material";
import PlayIcon from "@mui/icons-material/PlayCircleOutlineOutlined";

const TrailerButton = ({ onPlay, children, dataTestid }) => {
  return (
    <Button
      style={{
        background: "#FAFAFA",
        padding: "16px",
        marginTop: "16px",
        width: "100%",
        justifyContent: "start",
      }}
      onClick={onPlay}
      data-testid={dataTestid}
    >
      <PlayIcon style={{ fill: "#757575", height: "20px", width: "20px" }} />
      <Typography
        fontWeight={500}
        color="#757575"
        textTransform="none"
        fontSize={"16px"}
        marginLeft="16px"
        lineHeight={"24px"}
      >
        {children}
      </Typography>
    </Button>
  );
};

export default TrailerButton;
