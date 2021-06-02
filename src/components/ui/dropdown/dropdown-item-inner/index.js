import React from "react";
import { DropmenuItemInner } from './dropdown-item-inner.style'

const DropdownItemInner = ({ children, ...props }) => {
	return (
		<DropmenuItemInner {...props}>
			{children}
			{props.active ? <i className="fa fa-angle-down"></i> : ''}
		</DropmenuItemInner>
	)
}

export default DropdownItemInner
