import React from "react";


import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Header/Header"

export const DefaultPage = ({children}) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}