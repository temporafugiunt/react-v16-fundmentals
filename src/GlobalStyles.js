import React from "react";
import { Global, css } from "@emotion/core";

export default function GlobalStyles(props) {
  return (
    <Global
      styles={css`
        * {
          color: hotpink;
        }
        @font-face {
          font-family: "Patrick Hand SC";
          font-style: normal;
          font-weight: 800;
          src: local("Patrick Hand SC"), local("PatrickHandSC-Regular"),
            url(https://fonts.gstatic.com/s/patrickhandsc/v4/OYFWCgfCR-7uHIovjUZXsZ71Uis0Qeb9Gqo8IZV7ckE.woff2)
              format("woff2");
          unicode-range: U+0100-024f, U+1-1eff, U+20a0-20ab, U+20ad-20cf, U+2c60-2c7f, U+A720-A7FF;
        }
      `}
    />
  );
}
