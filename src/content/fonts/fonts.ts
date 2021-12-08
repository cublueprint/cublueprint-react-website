import Poppins from './content/fonts/Poppins-SemiBold.ttf';
import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  @font-face {
    font-family: "Poppins",
    font-style: normal;
    font-weight: 200;
    src: url(${Poppins}) format('truetype'), /* Safari, Android, iOS */
  }
`;