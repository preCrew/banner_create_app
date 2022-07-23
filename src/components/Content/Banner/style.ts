import styled from "styled-components";
import { BannerProps } from "./index";
import img from './images/user.png'

export default styled.div<BannerProps>`
  height: 30vw;
  margin: 16px;
  background: #187818;
  flex-grow: 1;
  position: sticky;
  top: 0;
  background-image: url(${props=>props.isImg.imgUrl});
  /* src: ${props => props.isImg}; */
`;