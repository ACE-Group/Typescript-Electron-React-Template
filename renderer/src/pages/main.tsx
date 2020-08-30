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
`;

function Main(props: any) {
	return (
		<Container>
			<Logo>
				<img src={logo} />
			</Logo>
			<Content>
				<span> Main Page</span>
			</Content>
		</Container>
	);
}

export default withRouter(withTheme(Main));
