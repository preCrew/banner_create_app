import styled, { css } from "styled-components";
import { TOptionState } from "../../../store/optionSlice";
import { theme } from "../../../styles/theme";

export default styled.div<{
  options: TOptionState;
}>`
  height: 100%;
  
  outline: 0;
  margin: 16px;
  flex-grow: 1;
  position: sticky;
  top: 16px;

  ${({options}) => css`
    background: ${options.backgroundColor};
    color: ${options.foregroundColor};
    font-size: ${options.fontSize}px;
    height: ${options.heightRatio}vw;
    border ${options.borderWidth}px solid ${options.borderColor};
    font-weight: ${theme.font.weight.fw700};

    display: flex;
    /* 가로방향 정렬 */
    justify-content: ${options.textAlignment.justifyContent};
    /* 세로방향 정렬 */
    align-items: ${options.textAlignment.alignItems};
    /* 텍스트 그림자 */
    text-shadow: ${options.textShadow.x}px ${options.textShadow.y}px ${options.textShadow.blur}px ${options.textShadow.color};


    & ::selection {
      color: ${options.backgroundColor};
      background: ${options.foregroundColor};
    }
  `}
`;

export const BannerText = styled.div`
  outline: 0;
  text-align: center;
`;