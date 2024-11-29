import { createGlobalStyle } from 'styled-components';

import PTSansRegularEot from '@/assets/fonts/PTSans-Regular.eot';
import PTSansRegularWoff2 from '@/assets/fonts/PTSans-Regular.woff2';
import PTSansRegularWoff from '@/assets/fonts/PTSans-Regular.woff';
import PTSansRegularTtf from '@/assets/fonts/PTSans-Regular.ttf';

import PTSansBoldEot from '@/assets/fonts/PTSans-Bold.eot';
import PTSansBoldWoff2 from '@/assets/fonts/PTSans-Bold.woff2';
import PTSansBoldWoff from '@/assets/fonts/PTSans-Bold.woff';
import PTSansBoldTtf from '@/assets/fonts/PTSans-Bold.ttf';

import BebasNeueTtf from '@/assets/fonts/BebasNeue-Regular.ttf';

export const GlobalStyles = createGlobalStyle`
  :root {
    --blue: #3877EE;
    --black-blue: #42567a;
    --iris: #3877ee;
    --fuschia: #ef5da8;
    --grey: #f4f5f9;
  }

  @font-face {
    font-family: "PT Sans";
    src: url(${PTSansRegularEot});
    src:
      local("PT Sans"),
      local("PTSans-Regular"),
      url(${PTSansRegularEot}?#iefix) format("embedded-opentype"),
      url(${PTSansRegularWoff2}) format("woff2"),
      url(${PTSansRegularWoff}) format("woff"),
      url(${PTSansRegularTtf}) format("truetype");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "PT Sans";
    src: url(${PTSansBoldEot});
    src:
      local("PT Sans Bold"),
      local("PTSans-Bold"),
      url(${PTSansBoldEot}?#iefix) format("embedded-opentype"),
      url(${PTSansBoldWoff2}) format("woff2"),
      url(${PTSansBoldWoff}) format("woff"),
      url(${PTSansBoldTtf}) format("truetype");
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Bebas Neue';
    src: url(${BebasNeueTtf}) format('truetype');
    font-weight: 400;
    font-style: normal;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "PT Sans", "Bebas Neue", sans-serif;
    background: var(--grey);
  }
`;
