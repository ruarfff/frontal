import React from "react";
import PropTypes from "prop-types";
import { FormGroupWrap } from './form-group.style'

export const FormGroup = ({ children, ...props }) => {
	return <FormGroupWrap {...props}>{children}</FormGroupWrap>
}

FormGroup.propTypes = {
	mb: PropTypes.string
}
