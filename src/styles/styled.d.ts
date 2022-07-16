import 'styled-components';

type FontSizes = 18 | 22 | 60;
type FontSizeType = `fs${FontSizes}`;

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      style : {
        regular: string,
        bold: string,
      },
      size: {
        [size in FontSizeType]: string;
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