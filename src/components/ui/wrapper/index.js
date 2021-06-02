import React from "react";
import PropTypes from "prop-types";
import { WrapperStyled, WrapperBgStyled } from './wrapper.style'
import { Container } from './container'
import { Row } from './row'
import { Col } from './col'
import { Box } from './box'

const Section = ({ children, tag, ...props }) => {
	const { fullwidth, bgImage, ...wrapperStyle } = props;

	if (bgImage) {
		return (
			<WrapperBgStyled
				{...wrapperStyle}
				tag={tag}
				{...bgImage}
			>
				<Container fluid={fullwidth}>
					{children}
				</Container>
			</WrapperBgStyled>
		)
	}
	return (
		<WrapperStyled as={tag} {...wrapperStyle}>
			<Container fluid={fullwidth}>
				{children}
			</Container>
		</WrapperStyled>
	)
}

export { Container, Row, Col, Box };

Section.propTypes = {
	children: PropTypes.node.isRequired,
	fullwidth: PropTypes.bool,
	pt: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	pb: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	pl: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	pr: PropTypes.oneOfType([
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
	ml: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	mr: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	responsive: PropTypes.object
}


export default Section;