import 'styled-components';

type FontSizes = 18 | 22 | 60;
type FontSizeType = `fs${FontSizes}`;


type FontWeights = 700;
type FontWeighType = `fw${FontWeights}`;

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      style : {
        regular: string,
        bold: string,
      },
      size: {
        [size in FontSizeType]: string;
      },
      weight: {
        [weight in FontWeighType]: number;
      }
    },   
    color : {
      primary1: string,
    },
    deviceSizes : {
      mobile: string,
      tablet: string,
      desktop: string,
    }, 
  }
}