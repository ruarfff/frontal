import React, { Children, isValidElement, cloneElement } from 'react'
import PropTypes from "prop-types";
import { SocialWrap } from './social.style'
import { SocialLink } from './social-link'

const Social = ({ children, ...props }) => {
	const childProps = {
		fontsize: props.fontsize,
		color: props.color,
		skin: props.skin,
		size: props.size,
		shape: props.shape,
		varient: props.varient,
		space: props.space,
		tooltip: props.tooltip,
		tooltip_bg: props.tooltip_bg,
		tooltip_position: props.tooltip_position,
		hover: props.hover
	}
	const childrenWithProps = Children.map(children, child => {
		if (isValidElement(child)) {
			return cloneElement(child, { ...childProps })
		}
		return child;
	});
	return <SocialWrap {...props}>{childrenWithProps}</SocialWrap>
}

Social.propTypes = {
	fontsize: PropTypes.string,
	color: PropTypes.string,
	skin: PropTypes.oneOf([
		'primary',
		'secondary',
		'success',
		'danger',
		'warning',
		'info',
		'light',
		'dark',
		'transparent'
	]),
	size: PropTypes.oneOf(['large', 'medium', 'small']),
	shape: PropTypes.oneOf(['square', 'rounded']),
	varient: PropTypes.oneOf(['outlined', 'flat', 'texted']),
	space: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	])
}

Social.defaultProps = {
	space: '15px',
	size: 'medium'
}

export { SocialLink }

export default Social
