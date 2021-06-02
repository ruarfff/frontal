import React from "react";
import { Boxwrap } from './box.style'

export const Box = ({ children, ...restProps }) => {
	return <Boxwrap {...restProps}>{children}</Boxwrap>
}