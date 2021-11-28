import React from "react";

import { MainStyled } from "./ListMainStyle";

export const ListMain = ({children}) => {
	return(
		<MainStyled>
			{children}
		</MainStyled>
	)
}