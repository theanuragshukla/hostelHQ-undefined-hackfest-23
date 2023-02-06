import { createTheme } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: "#EB7C3E",
    },
    secondary: {
      main: "#455A64",
    },
  },
  typography: {
    fontFamily: "Ubuntu",
  },
  shape: {},
  props: {
    MuiButton: {
      variant: "contained",
      disableRipple: true,
      color: "primary",
    },
    MuiTextField: {
      variant: "contained",
      InputLabelProps: {
        shrink: true,
      },
    },
    Paper: {
      elevation: 0,
    },
  },
});
export default theme;
