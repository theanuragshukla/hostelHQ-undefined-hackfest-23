import { Box } from "@mui/system";
import react from "react";
const Circle = ({x,y,a,b,r}) => {
  return (
      <Box height={2*r} width={2*r} left={x} top={y} bottom={b} right={a} borderRadius="50%" bgcolor='#EB7C3E' position="absolute" zIndex={1}></Box>
  );
};

export default Circle;
