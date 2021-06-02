import React from "react";
import PropTypes from "prop-types";
import { ErrorWrap } from './error.style'

export const Error = ({ children, ...props }) => {
	return <ErrorWrap {...props}>{children}</ErrorWrap>
}

Error.propTypes = {
	mb: PropTypes.string
}
