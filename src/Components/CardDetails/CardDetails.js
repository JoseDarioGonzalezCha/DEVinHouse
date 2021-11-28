import React from "react";

import {
  ImgStyled,
  TitleStyled,
  SectionStyled,
  ImgsStyled,
  SecundTitleStyled,
  GenerStyled,
  ParagraphStyled,
  RequisitoStyled,
  ThreeTitle,
  SpanStyled,
} from "./CardDetailsStyle";

export const CardDetails = ({
  titleJogo,
  imgBig,
  imgSmall
}) => {
  return (
    <>
      <SectionStyled>
        <div>
          <TitleStyled>{titleJogo}</TitleStyled>
          <ImgStyled src={imgBig} alt={titleJogo} />
        </div>
        <div>
          <ImgsStyled src={imgSmall} alt={titleJogo} />
          
        </div>
      </SectionStyled>
      
    </>
  );
};
