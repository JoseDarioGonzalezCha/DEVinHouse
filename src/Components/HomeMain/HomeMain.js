import React from "react";

import BgImage from "../../assets/images/bg-image.jpg";
import { HomeMainStyled } from "./HomeMainStyle";
import { BgStyled } from "./HomeMainStyle";
import { TitleStyled } from "./HomeMainStyle";
import { ParagraphStyled } from "./HomeMainStyle";

export const HomeMain = () => {
	return(
		<HomeMainStyled>
			<TitleStyled>SEJA BEM-VINDO PARA O DEVinMMO</TitleStyled>
			<BgStyled src={BgImage} alt="Bg video game" />
			<ParagraphStyled>Prepare-se para experimentar o máximo de plataformas de videogame.</ParagraphStyled>
		</HomeMainStyled>
	)
}