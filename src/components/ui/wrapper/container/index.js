import React from "react";
import PropTypes from "prop-types";
import { Containerwrap } from './container.style'

export const Container = ({ children, ...restProps }) => {
	return (
		<Containerwrap {...restProps}>
			{children}
		</Containerwrap>
	)
}

Container.propTypes = {
	children: PropTypes.node.isRequired
}