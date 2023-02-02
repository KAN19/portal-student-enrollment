import Fallback from 'components/fallback';
import Protection from 'components/protection/Protection';
import React from 'react';
import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('pages/homepage'));
const RegisterPage = lazy(() => import('pages/register-page'));

function RouterApp() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Auth Routes */}
				<Route path="/" element={<Protection />}>
					<Route path="/" element={<Fallback page={<Home />} />} />
					<Route
						path="/nop-ho-so"
						element={<Fallback page={<RegisterPage />} />}
					/>
				</Route>
				{/* </Route> */}
			</Routes>
		</BrowserRouter>
	);
}

export default RouterApp;
