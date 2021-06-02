import React from "react";
import PropTypes from "prop-types";
import { DropdownWrap, DropdownMenu } from './dropdown.style'

const Dropdown = ({ children, ...props }) => {
	return (
		<DropdownWrap {...props}>
			<DropdownMenu>
				{children}
			</DropdownMenu>
		</DropdownWrap>
	)
}

Dropdown.propTypes = {
	children: PropTypes.node.isRequired,
	pr: PropTypes.string,
	pl: PropTypes.string,
	pt: PropTypes.string,
	pb: PropTypes.string
}

export default Dropdown
