import React from "react";
import PropTypes from "prop-types";
import { NumberedListWrap } from './numbered-list.style'
import { NumberedListItem } from './numbered-list-item'

const NumberedList = ({ children }) => {
	return <NumberedListWrap>{children}</NumberedListWrap>
}

NumberedList.propTypes = {
	children: PropTypes.node.isRequired
}

export { NumberedListItem }

export default NumberedList