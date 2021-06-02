import React from "react";
import PropTypes from "prop-types";
import { HeadingWrapper } from './heading.style'

const Heading = ({ children, ...props }) => {
	return <HeadingWrapper {...props}>{children}</HeadingWrapper>
}

Heading.propTypes = {
	children: PropTypes.node.isRequired,
	as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
	fontSize: PropTypes.string,
	color: PropTypes.string,
	responsive: PropTypes.object,
}

Heading.defaultProps = {
	as: 'h2'
}

export default Heading
