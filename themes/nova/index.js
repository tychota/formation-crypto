import nova from "nova-colors";

import React from "react";
import prism from "@theme-ui/prism/presets/theme-ui";
import Provider from "./components/Provider";
import DarkSlide from "./components/DarkSlide";

const WrappedProvider = props => <Provider {...props} />;

export default {
  googleFont:
    "https://fonts.googleapis.com/css?family=Montserrat:700|Open+Sans:400,700|Fira+Code",
  fonts: {
    heading: '"Montserrat", sans-serif',
    body: '"Open Sans", sans-sherif',
    monospace: '"Fira Code", monospace'
  },
  fontWeights: {
    heading: 700,
    bold: 700
  },
  colors: {
    text: nova.grays.gray6,
    background: nova.grays.gray1,
    muted: nova.grays.gray0,
    primary: nova.colors.blue,
    secondary: nova.colors.yellow,
    accent: nova.colors.red
  },
  styles: {
    h1: {
      color: "primary",
      fontSize: "7rem",
      lineHeight: 1,
      margin: "0 auto 2rem"
    },
    h2: {
      color: "primary",
      fontSize: "5rem",
      lineHeight: 1,
      margin: "0 auto 2rem"
    },
    h3: {
      color: "text",
      fontSize: "3rem",
      lineHeight: 1,
      margin: "0 auto 2rem"
    },
    h4: {
      color: "text",
      fontSize: "2rem",
      lineHeight: 1,
      margin: "0 auto 2rem"
    },
    pre: {
      ...prism,
      backgroundColor: "muted",
      borderRadius: "0.3rem",
      fontSize: "2.5rem"
    },
    text: {
      fontSize: "1.75rem",
      margin: "0 auto 0.5rem"
    },
    blockquote: {
      display: "block",
      fontSize: "4rem",
      fontWeight: 500,
      fontStyle: "italic",
      lineHeight: 1.1,
      margin: "0 10rem 0"
    }
  },
  Provider: WrappedProvider
};
