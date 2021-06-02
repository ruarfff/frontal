import React from "react";
import PropTypes from "prop-types";
import { ClickableWrap } from './clickable.style'

const Clickable = ({ children, onClick, ...props }) => {
	return <ClickableWrap type="button" onClick={onClick} {...props}>{children}</ClickableWrap>
}

Clickable.propTypes = {
	fontsize: PropTypes.string
}

export default Clickable
