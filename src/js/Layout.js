import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./views/Home.jsx";
import { CharacterDetail } from "./views/CharacterDetail.jsx";
import { PlanetDetail } from "./views/PlanetDetail.jsx";
import { VehicleDetail } from "./views/VehicleDetail.jsx";
import { NotFound } from "./views/NotFound.jsx"
import injectContext from "./store/appContext.js";

import { Navbar } from "./component/navbar.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/characterdetail/:uid" element={<CharacterDetail />} />
					<Route path="/planetdetail/:uid" element={<PlanetDetail />} />
					<Route path="/vehicledetail/:uid" element={<VehicleDetail />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
