import React from "react";
import { AlertWrap } from "./style";

const Alert = ({ children, ...restProps }) => {
	return <AlertWrap {...restProps}>{children}</AlertWrap>
}

export default Alert
