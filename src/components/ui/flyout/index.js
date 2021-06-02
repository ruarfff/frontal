import React from "react";
import { FlyoutHeader } from './flyout-header'
import { FlyoutBody } from './flyout-body'
import { FlyoutWrap } from './flyout.style'

const Flyout = ({ children, ...restProps }) => {
	return <FlyoutWrap {...restProps}>{children}</FlyoutWrap>
}

export { FlyoutHeader, FlyoutBody };
export default Flyout;