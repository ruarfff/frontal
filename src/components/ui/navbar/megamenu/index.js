import React from "react";
import PropTypes from "prop-types";
import { MegamenuWrap } from './megamenu.style'


export const Megamenu = ({ children, ...props }) => {
	return <MegamenuWrap {...props}>{children}</MegamenuWrap>
}

Megamenu.propTypes = {
	children: PropTypes.node.isRequired,
	fullwidth: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.bool
	])
}

Megamenu.defaultProps = {
	fullwidth: true
}