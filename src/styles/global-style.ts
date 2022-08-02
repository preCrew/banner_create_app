import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

import '../assets/fonts/index.css';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    body {
        font-family: 'NotoSansKR-R';
    }
`;