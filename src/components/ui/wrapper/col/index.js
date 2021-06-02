import React from "react";
import PropTypes from "prop-types";
import { Colwrap } from './col.style'

export const Col = ({ children, ...restProps }) => {
	return (
		<Colwrap {...restProps}>
			{children}
		</Colwrap>
	)
}

Col.propTypes = {
	children: PropTypes.node.isRequired
}