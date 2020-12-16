import styled from "styled-components";
// Grays
export const gray1 = "#383737";
export const gray2 = "#565555";
export const gray3 = "#857c81";
export const gray4 = "#b9b9b9";
export const gray5 = "#e0dddd";

// Colors
export const primary1 = "#6ca583";
export const accent1 = "#9b8dab";

// Fonts
export const fontFamily = "'Segoe UI', 'Helvetica Neue',sansserif";
export const fontSize = "15px";

const StyledContainer = styled.div`
    width: 600px;
    margin: 30px auto;
    font-family: ${fontFamily};
    font-size: ${fontSize};
    color: ${gray1};
`;

export default StyledContainer;
