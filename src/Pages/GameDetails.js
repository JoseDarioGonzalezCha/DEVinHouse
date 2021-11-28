import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { DefaultPage } from "../Template/DefaultPage";
import { CardDetails } from "../Components/CardDetails/CardDetails";
import { CardDetailsDescription } from "../Components/CardDetailsDescription/CardDetailsDescription";


export const GameDetails = () => {

	const { gamesId } = useParams();
	const [game, setGame] = useState({descri: ['']});

	useEffect(() => {
		const config = {
			method: "GET",
			headers: {
			  "x-rapidapi-host": "mmo-games.p.rapidapi.com",
			  "x-rapidapi-key": "fc7e636715mshc1f1fdab04b3bb7p18616fjsn1716f765684c",
			},
		  };
		  fetch(`https://mmo-games.p.rapidapi.com/game?id=${gamesId}`, config)
		  .then((response) => response.json())
		  .then((data) => setGame(data));
	}, [gamesId])

	

	return(
		<DefaultPage>
		<CardDetails 
		titleJogo={game.title}
		imgBig={game.thumbnail}
		
		/>
		<CardDetailsDescription 
		gender={game.genre}
		platform={game.platform}
		description={game.description}
		operSistem={game.minimum_system_requirements.os}
		processador={game.minimum_system_requirements.processor}
		memory={game.minimum_system_requirements.memory}
		graphic={game.minimum_system_requirements.graphics}
		hardDisc={game.minimum_system_requirements.storage}
		/> 

		
		</DefaultPage>
	)
}
