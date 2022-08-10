import { Global } from "@emotion/react";

export const ChakraFonts = () => (
  <Global
    styles={`
    @font-face {
      font-family: "Lato";
      font-style: normal;
      font-weight: 900;
      font-display: swap;
      src: url(/assets/fonts/Lato/Lato-Black.ttf) format("truetype");
    }
    @font-face {
      font-family: "Lato";
      font-style: italic;
      font-weight: 900;
      font-display: swap;
      src: url(/assets/fonts/Lato/Lato-BlackItalic.ttf) format("truetype");
    }
    @font-face {
      font-family: "Lato";
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(/assets/fonts/Lato/Lato-Bold.ttf) format("truetype");
    }
    @font-face {
      font-family: "Lato";
      font-style: italic;
      font-weight: 700;
      font-display: swap;
      src: url(/assets/fonts/Lato/Lato-BoldItalic.ttf) format("truetype");
    }
    @font-face {
      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(/assets/fonts/Lato/Lato-Regular.ttf) format("truetype");
    }
    @font-face {
      font-family: "Lato";
      font-style: italic;
      font-weight: 400;
      font-display: swap;
      src: url(/assets/fonts/Lato/Lato-Italic.ttf) format("truetype");
    }
    @font-face {
      font-family: "Lato";
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url(/assets/fonts/Lato/Lato-Light.ttf) format("truetype");
    }
    @font-face {
      font-family: "Lato";
      font-style: italic;
      font-weight: 300;
      font-display: swap;
      src: url(/assets/fonts/Lato/Lato-LightItalic.ttf) format("truetype");
    }
    @font-face {
      font-family: "Lato";
      font-style: normal;
      font-weight: 100;
      font-display: swap;
      src: url(/assets/fonts/Lato/Lato-Thin.ttf) format("truetype");
    }
    @font-face {
      font-family: "Lato";
      font-style: italic;
      font-weight: 100;
      font-display: swap;
      src: url(/assets/fonts/Lato/Lato-ThinItalic.ttf) format("truetype");
    }
      `}
  />
);
