import { extendTheme } from "@chakra-ui/react";
import { Dict } from "@chakra-ui/utils";

import Button from "./components/button";

// https://chakra-ui.com/docs/theming/theme
const colors = {
  black: "#000",
  white: "#fff",
  primary: {
    light: "#2D9CDB",
    dark: "#90cdf4",
  },
  secondary: "#343A40",
  blue: {
    pastel: "#56CCF2",
  },
  green: {
    pastel: "#27AE60",
  },
  grey: {
    charcoal: "#424B57",
    light: "#DDDDDD",
  },
  red: {
    pastel: "#FF0000",
  },
};

export default extendTheme({
  colors,
  components: {
    Button,
  },
}) as Dict;
