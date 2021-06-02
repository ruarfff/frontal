import React from "react";
import PropTypes from "prop-types";
import { IconWrap } from './icon.style'

const Icon = ({ iconName, ...restProps }) => {
	return <IconWrap className={iconName} {...restProps} />
}

Icon.propTypes = {
	iconName: PropTypes.string,
	color: PropTypes.string,
	fontSize: PropTypes.string,
	fontweight: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	lineHeight: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	])
}

Icon.defultProps = {
	lineHeight: 1
}

export default Icon