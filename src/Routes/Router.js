import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import { GameDetails } from "../Pages/GameDetails";
import { GameList } from "../Pages/GameList";
import { GameNews } from "../Pages/GameNews";
import { Home } from "../Pages/Home";

export const Routers = () => {
	return(
		<Router>
			<Routes>
				<Route path="/" element={ <Home />} />
				<Route path="/games" element={ <GameList />} />
				<Route path="/games/:gamesId" element={ <GameDetails />} />
				<Route path="/news" element={ <GameNews />} />
			</Routes>
		</Router>
	)
}