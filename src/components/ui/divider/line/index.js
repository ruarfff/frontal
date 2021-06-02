import React from "react";
import { LineWrap } from "./style";

const DividerLine = props => {
	return (
		<LineWrap {...props} />
	)
}

DividerLine.defaultProps = {
	borderWidth: '1px',
	borderStyle: 'solid'
}

export default DividerLine
