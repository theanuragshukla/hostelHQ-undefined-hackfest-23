import React from "react";
import { Button } from "@mui/material";

const Btn = (props) => {
  return (
    
    <div>
      <Button
        sx={{
          bgcolor:"#8456B5",
          color: "white",
          "&:hover": { bgcolor: "purple" },
        }}
        variant="contained"
      >
        {props.value}
      </Button>
    </div>
  );
};

export default Btn;
