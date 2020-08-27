import React, { useRef, useEffect } from "react";
import styled, { withTheme } from "styled-components";

const Loader = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;
`;

function Foo(props: any) {
	return <Container />;
}

export default withTheme(Foo);
