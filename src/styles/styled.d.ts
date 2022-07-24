import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      style : {
        regular: string,
        bold: string,
      },
      size: {
        fs18: string,
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