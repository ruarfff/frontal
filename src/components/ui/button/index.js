import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { ButtonWrap, AnchorButton, HashButton } from './button.style';

const Button = ({ children, icon, ...props }) => {
	const { to, ...restProps } = props;
	const internal = /^\/(?!\/)/.test(to)
	if (to) {
		const isHash = to.startsWith('#')
		if (internal) {
			return (
				<ButtonWrap as={Link} {...props}>
					{props.iconposition === 'left' && icon && <i className={`btn-icon ${icon}`}></i>}
					{children}
					{props.iconposition === 'right' && icon && <i className={`btn-icon ${icon}`}></i>}
				</ButtonWrap>
			)
		} else if (isHash) {
			return (
				<HashButton href={to} {...restProps}>
					{props.iconposition === 'left' && icon && <i className={`btn-icon ${icon}`}></i>}
					{children}
					{props.iconposition === 'right' && icon && <i className={`btn-icon ${icon}`}></i>}
				</HashButton>
			)
		} else {
			return (
				<AnchorButton href={to} {...restProps}>
					{props.iconposition === 'left' && icon && <i className={`btn-icon ${icon}`}></i>}
					{children}
					{props.iconposition === 'right' && icon && <i className={`btn-icon ${icon}`}></i>}
				</AnchorButton>
			)
		}
	} else {
		return (
			<ButtonWrap {...props}>
				{props.iconposition === 'left' && icon && <i className={`btn-icon ${icon}`}></i>}
				{children}
				{props.iconposition === 'right' && icon && <i className={`btn-icon ${icon}`}></i>}
			</ButtonWrap>
		)
	}
}

Button.propTypes = {
	children: PropTypes.node.isRequired,
	href: PropTypes.string,
	type: PropTypes.oneOf(['button', 'submit', 'reset']),
	onClick: PropTypes.func,
	fontSize: PropTypes.string,
	fontWeight: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	color: PropTypes.string,
	bgcolor: PropTypes.string,
	skin: PropTypes.oneOf([
		'primary',
		'secondary',
		'success',
		'danger',
		'warning',
		'info',
		'light',
		'dark',
		'gradient',
		'transparent'
	]),
	size: PropTypes.oneOf(['large', 'medium', 'small', 'xsmall']),
	shape: PropTypes.oneOf(['rectangle', 'rounded', 'bullet']),
	varient: PropTypes.oneOf(['outlined', 'texted', 'underlined', 'onlyIcon', 'contained']),
	borderwidth: PropTypes.string,
	hover: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.string,
		PropTypes.number,
		PropTypes.object
	]),
	minwidth: PropTypes.string,
	fullwidth: PropTypes.bool,
	iconposition: PropTypes.string,
	spacer: PropTypes.object
};

Button.defaultProps = {
	fontSize: '15px',
	fontWeight: 500,
	skin: 'primary',
	size: 'medium',
	shape: 'rounded',
	borderwidth: '1px',
	iconposition: 'right',
	hover: "true"
}


export default Button
