import React from "react";
import CloseButton from "@ui/close-button";
import { OffCanvasHeaderWrap, OffCanvasHeaderLeft, OffCanvasHeaderRight } from './off-canvas-header.style'


export const OffCanvasHeader = ({ children, onClick }) => {
	return (
		<OffCanvasHeaderWrap>
			<OffCanvasHeaderLeft>{children}</OffCanvasHeaderLeft>
			<OffCanvasHeaderRight>
				<CloseButton onClick={onClick} />
			</OffCanvasHeaderRight>
		</OffCanvasHeaderWrap>
	)
}

