import React from "react";
import PropTypes from "prop-types";
import { ListItemWrap } from './list-item.style'

export const ListItem = ({ children, ...props }) => {
	return <ListItemWrap {...props}>{children}</ListItemWrap>
}


ListItem.propTypes = {
	children: PropTypes.node.isRequired
}