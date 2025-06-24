import { BrowserRouter, Routes, Route } from "react-router";

import { Home } from "../pages/Home";
import { Registration } from "../pages/Registration";

import "bootstrap/dist/css/bootstrap.min.css";

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/registration" element={<Registration />} />
			</Routes>
		</BrowserRouter>
	);
}
