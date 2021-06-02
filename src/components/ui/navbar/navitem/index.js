import React from "react";
import PropTypes from "prop-types";
import { NavItemWrap } from './navitem.style'

export const NavItem = ({ children, ...props }) => {
	return (
		<NavItemWrap {...props}>
			{children}
		</NavItemWrap>
	)
}

NavItem.propTypes = {
	children: PropTypes.node.isRequired
};



