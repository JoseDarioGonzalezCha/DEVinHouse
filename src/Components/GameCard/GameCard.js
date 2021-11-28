import React from "react";
import { useNavigate } from "react-router";

import { CardStyled } from "./GameCardStyle";
import { ImgStyled } from "./GameCardStyle";
import { TitleStyled } from "./GameCardStyle";
import { ParagraphStyled } from "./GameCardStyle";

export const GameCard = ({thumb, title, description, id}) => {

	const navigate = useNavigate();

	return (
		<CardStyled>
			<div>
				<ImgStyled src={thumb} alt={title} />
				<TitleStyled>{title}</TitleStyled>
				<ParagraphStyled>{description}</ParagraphStyled>
			</div>
			<div>
				<button onClick={() => navigate(`/games/${id}`)}>VER MAIS</button>
			</div>
		</CardStyled>
	)
}