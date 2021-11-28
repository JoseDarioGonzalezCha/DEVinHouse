import styled from "styled-components";

export const HomeMainStyled = styled.main`
  width: 100%;
  height: 100vh;
  background: linear-gradient(#e5e5e5, #f2e9e4, #edf2f4, #656d4a);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

export const BgStyled = styled.img`
  width: 300px;
  height: 300px;
  margin: 30px;
  border: 1px solid #054861;
  border-radius: 3%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
export const TitleStyled = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  background: -webkit-linear-gradient(
    45deg,
    #80ffdb,
    #0caee9,
    #0982ae,
    #054861
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ParagraphStyled = styled.p`
  font-weight: bold;
  font-size: 2.5;
`;
