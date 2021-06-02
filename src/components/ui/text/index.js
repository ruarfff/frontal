import React from "react";
import PropTypes from "prop-types";
import { TextWrapper } from './text.style'


const Text = ({ children, ...props }) => {
	return <TextWrapper  {...props}>{children}</TextWrapper>
}

Text.propTypes = {
	children: PropTypes.node.isRequired,
	color: PropTypes.string,
	fontSize: PropTypes.string,
	align: PropTypes.string,
	lineHeight: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	pt: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	pb: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	mt: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	mb: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	maxWidth: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	fontWeight: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	as: PropTypes.oneOf(['p', 'a', 'span', 'strong', 'em']),
	responsive: PropTypes.object,
}


export default Text
