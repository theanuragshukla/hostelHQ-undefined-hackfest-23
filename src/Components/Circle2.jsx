import { Box } from "@mui/system";
import react from "react";
const Circle2 = ({x,y,a,b,r}) => {
  return (
      <Box height={2*r} width={2*r} left={x} top={y} bottom={b} right={a} borderRadius="50%" bgcolor='#5c6bc0' opacity="0" position="absolute" ></Box>
  );
};

export default Circle2;
