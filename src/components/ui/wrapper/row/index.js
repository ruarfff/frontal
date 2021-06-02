import React from "react";
import PropTypes from "prop-types";
import { Rowwrap } from './row.style'

export const Row = ({ children, noGutter, ...restProps }) => {
	const classes = [];
	if (noGutter) {
		classes.push('no-gutters')
	}
	return (
		<Rowwrap className={classes.join(' ')} {...restProps}>
			{children}
		</Rowwrap>
	)
}

Row.propTypes = {
	children: PropTypes.node.isRequired,
	noGutter: PropTypes.bool,
	gutters: PropTypes.object
}