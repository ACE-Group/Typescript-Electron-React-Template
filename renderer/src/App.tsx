import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { createHashHistory } from "history";
import defaultTheme from "./constants/DefaultTheme.json";
import darkTheme from "./constants/DarkTheme.json";

import Login from "./pages/login";
import Main from "./pages/main";

const history = createHashHistory();
const Wrapper = styled.div`background-color: ${(props) => props.theme.colorBack};`;

const fakeAuth = {
	isAuthenticated: true,
	authenticate(cb) {
		fakeAuth.isAuthenticated = true;
		setTimeout(cb, 100); // fake async
	},
	signout(cb) {
		fakeAuth.isAuthenticated = false;
		setTimeout(cb, 100);
	}
};

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const PrivateRoute = ({ children, ...rest }) => {
	return (
		<Route
			{...rest}
			render={({ location }) =>
				fakeAuth.isAuthenticated ? location.pathname === "/login" ? (
					<Redirect to="/" />
				) : (
					children
				) : location.pathname !== "/login" ? (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: location }
						}}
					/>
				) : (
					children
				)}
		/>
	);
};

const App = () => {
	const theme = Object.assign(defaultTheme, darkTheme);

	return (
		<ThemeProvider theme={theme}>
			<Wrapper>
				<Router history={history}>
					<Switch>
						<PrivateRoute exact path="/">
							<Main />
						</PrivateRoute>
						<PrivateRoute exact path="/login">
							<Login />
						</PrivateRoute>
					</Switch>
				</Router>
			</Wrapper>
		</ThemeProvider>
	);
};

export default App;
