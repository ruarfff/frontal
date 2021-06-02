import React from "react";
import { FlyoutHeaderWrap } from './flyout-header.style'

export const FlyoutHeader = ({ children }) => {
	return (
		<FlyoutHeaderWrap>
			{children}
		</FlyoutHeaderWrap>
	)
}