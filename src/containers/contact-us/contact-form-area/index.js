import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import Text from "@ui/text";
import ContactForm from "@components/forms/contact-form";
import { ContactFormWrapper, LeftBox } from './contact-form-area.style'

const ContactFormArea = ({ headingStyle, textStyle }) => {
	return (
		<ContactFormWrapper>
			<Container>
				<Row alignitems="center">
					<Col lg={6}>
						<LeftBox>
							<Heading {...headingStyle}>To make requests for <br /> further information, <br /> <span>contact us</span> via our social channels.</Heading>
							<Text {...textStyle}>We just need a couple of hours! No more than 2 working days since receiving your issue ticket</Text>
						</LeftBox>
					</Col>
					<Col lg={6}>
						<ContactForm />
					</Col>
				</Row>
			</Container>
		</ContactFormWrapper>
	)
}

ContactFormArea.propTypes = {
	headingStyle: PropTypes.object,
	textStyle: PropTypes.object
}

ContactFormArea.defaultProps = {
	headingStyle: {
		as: "h3",
		position: "relative",
		pl: '34px',
		lineheight: 1.67,
		fontweight: 600,
		child: {
			color: 'primary'
		},
		layout: 'quote'
	},
	textStyle: {
		mt: '15px',
		fontSize: '18px',
		ml: '34px',
		color: '#696969'
	}
}

export default ContactFormArea;