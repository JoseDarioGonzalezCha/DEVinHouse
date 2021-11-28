import React, { useEffect, useState } from "react";

import { DefaultPage } from "../Template/DefaultPage";
import { GameCard } from "../Components/GameCard/GameCard";
import { ListMain } from "../Components/GameListMain/GameListMain";

export const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const config = {
      method: "GET",
      headers: {
        "x-rapidapi-host": "mmo-games.p.rapidapi.com",
        "x-rapidapi-key": "fc7e636715mshc1f1fdab04b3bb7p18616fjsn1716f765684c",
      },
    };
    fetch("https://mmo-games.p.rapidapi.com/games", config)
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  const showGame = games[0];

  return (
    <DefaultPage>
      <ListMain>
        {games.length > 0 ? (
          games.map((game) => (
            <GameCard
              id={games.id}
              thumb={game.thumbnail}
              title={game.title}
              description={game.short_description}
            />
          ))
        ) : (
          <p>Não Há card de jogos disponíveis</p>
        )}
      </ListMain>
    </DefaultPage>
  );
};
