import React from "react";
import PropTypes from "prop-types";
import { ListWrap } from './list.style'
import { ListItem } from './list-item'

const List = ({ children, ...props }) => {
	return <ListWrap {...props}>{children}</ListWrap>
}

List.propTypes = {
	children: PropTypes.node.isRequired
}

export { ListItem };
export default List;