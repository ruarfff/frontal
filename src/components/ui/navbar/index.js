import React from "react";
import PropTypes from "prop-types";
import { NavItem } from './navitem'
import { NavLink } from './navlink'
import { Submenu } from './submenu'
import { Megamenu } from './megamenu'
import { ExpandButton } from './expand-button'
import { NavbarWrap } from './navbar.style';

const NavBar = ({ children, ...props }) => {
	return (
		<NavbarWrap {...props}>
			{children}
		</NavbarWrap>
	)
}

NavBar.propTypes = {
	children: PropTypes.node.isRequired
};


export { NavItem, NavLink, Submenu, Megamenu, ExpandButton }

export default NavBar
