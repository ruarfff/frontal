import React from "react";
import { DotsWrap, Dot } from "./style";

const DividerDot = props => {
	return (
		<DotsWrap {...props}>
			<Dot serial="first" />
			<Dot serial="second" />
			<Dot serial="third" />
		</DotsWrap>
	)
}

export default DividerDot
