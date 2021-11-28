import styled from "styled-components";

export const CardStyled = styled.article`
  width: 350px;
  height: 450px;
  margin: 10px;
  padding: 20px;
  border: 1px solid #48d0b0;
  border-radius: 10px;
  background: linear-gradient(#51caf6, #0caee9, #0982ae, #054861, #010f14);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const ImgStyled = styled.img`
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid #48d0b0;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const TitleStyled = styled.h4`
  color: #ffffff;
  margin-bottom: 20px;
`;

export const ParagraphStyled = styled.p`
  color: #ffffff;
  margin-bottom: 30px;
`;
