import React from "react";
import { ExpandButtonWrap } from './expand-button.style'

export const ExpandButton = ({ onClick, ...props }) => {
	return (
		<ExpandButtonWrap className="menu-expand" onClick={onClick} {...props}>
			<i className="icon far fa-angle-down"></i>
		</ExpandButtonWrap>
	)
}

