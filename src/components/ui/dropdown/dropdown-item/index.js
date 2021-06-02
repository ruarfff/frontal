import React from "react";
import { DropdownItemWrap } from './dropdown-item.style'

const DropdownItem = ({ children, onClick, ...props }) => {
	return (
		<DropdownItemWrap {...props} onClick={onClick}>
			{children}
		</DropdownItemWrap>
	)
}

export default DropdownItem
