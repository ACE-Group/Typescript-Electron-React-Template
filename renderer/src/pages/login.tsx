import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import logo from "../assets/images/logo.png";
import styled, { withTheme } from "styled-components";

const Container = styled.div`
	margin-top: 2rem;
	margin-bottom: 2rem;
	position: relative;
	width: 100%;

	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	text-align: center;
`;

const Logo = styled.div`
	display: block;
	margin-top: 4rem;
	margin-bottom: 4rem;

	img {
		width: 80%;
	}
`;

const Content = styled.div`
	width: 43.3%;
	min-width: 450px;
	max-width: 800px;

	text-align: center;
	font-size: 50px;
	color: white;

	a {
		display: block;
		color: blue;
		font-size: 20px;
		cursor: pointer;
		padding: 2rem 10rem;
		background: grey;

		&:hover {
			transform: scale(1.2);
			transition: .2s;
		}
	}
`;

function Login(props: any) {
	const [ viewed, setViewed ] = useState(false);
	const skip = () => {
		setViewed(true);
	};

	return (
		<Container>
			<Logo>
				<img src={logo} />
			</Logo>
			<Content>
				<span> Login Page</span>
				<a>Login</a>
			</Content>
		</Container>
	);
}

export default withRouter(withTheme(Login));
