import React from "react";
import PropTypes from "prop-types";
import 'react-accessible-accordion/dist/fancy-example.css';
import { AccordionWrapper } from './accordion.style'

const AccordionWrap = ({ children, ...props }) => {
	return (
		<AccordionWrapper {...props}>
			{children}
		</AccordionWrapper>
	)
}

AccordionWrap.propTypes = {
	children: PropTypes.node.isRequired,
	layout: PropTypes.oneOf(['one', 'two'])
}

AccordionWrap.defaultProps = {
	layout: "one"
}


export default AccordionWrap
