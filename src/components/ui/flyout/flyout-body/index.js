import React from "react";
import { FlyoutBodyWrap, FlyoutBodyInner } from './flyout-body.style'

export const FlyoutBody = ({ children }) => {
	return (
		<FlyoutBodyWrap>
			<FlyoutBodyInner>{children}</FlyoutBodyInner>
		</FlyoutBodyWrap>
	)
}