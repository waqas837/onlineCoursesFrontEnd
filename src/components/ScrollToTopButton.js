import React from "react";
import { IconButton } from "@material-ui/core";
import { ArrowUpward } from "@material-ui/icons";
const ScrollToTopButton = () => {
  const jumpToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };
  return (
    <div>
      <IconButton
        onClick={jumpToTop}
        style={{
          background: "rgb(233,30,99)",
          position: "fixed",
          left: "90%",
          top: "90%",
          zIndex: "1000px",
          color: "white",
        }}
      >
        <ArrowUpward
          style={{ fontSize: "13px", fontWeight: "bold" }}
          fontSize="small"
        />
      </IconButton>
    </div>
  );
};

export default ScrollToTopButton;
