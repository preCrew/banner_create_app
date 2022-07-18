import styled from "styled-components";

export default styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 880px){
    flex-direction: column;
  }
`;

export const SCustomInput = styled.input`
display: none;
`;