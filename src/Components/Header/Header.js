import React from "react";
import { Link } from "react-router-dom";

import { HeaderStyled } from "../Header/HeaderStyle"
import { UlStyled } from "../Header/HeaderStyle";

export const Header = () => {
  return (
    <HeaderStyled>
      <Link to="/">DEVinMMO</Link>
      <nav>
        <UlStyled>
          <li><Link to="games">Jogos</Link></li>
          <li><Link to="games/:gamesId">Detalhes</Link></li>
          <li><Link to="news">Noticias</Link></li>
        </UlStyled>
      </nav>
    </HeaderStyled>
  );
};
