import styled from "styled-components";

// TODO: Header 컴포넌트로 교체
export default styled.header`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  height: 80px;

  & h1{
    font-size: 1.5rem;
    font-family: ${props => props.theme.font.style.bold};
  }

  & .ico-git{
    font-family: ${props => props.theme.font.style.bold};    
    img{
      vertical-align: text-top;
    }
  }  

  a {
    color: rgb(0,0,0);
    text-decoration:none;
  }
`;