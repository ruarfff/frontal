import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import parse from "html-react-parser";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "@ui/heading";
import Button from '@ui/button'
import bg from "@data/images/bg/mitech-landing-footer-bg-01.jpg";
import { FooterWrap, FooterInner, FooterContent, ButtonWrap } from './footer.style'

const Footer = ({ heading, subheading }) => {
	const footerData = useStaticQuery(graphql`
        query FooterDataQuery{
            landingJson(id: {eq: "preview-footer-data"}) {
                title
                subtitle
                path
            }
        }
    `)
	const { title, subtitle } = footerData.landingJson;
	return (
		<FooterWrap>
			<FooterInner style={{ backgroundImage: `url(${bg})` }}>
				<Container>
					<Row>
						<Col lg={12}>
							<FooterContent>
								{title && <Heading {...heading}>{parse(title)}</Heading>}
								{subtitle && <Heading {...subheading}>{subtitle}</Heading>}
								<ButtonWrap>
									<Button
										to="https://1.envato.market/3bOdB"
										target="_blank"
										rel="noopener noreferrer"
										skin="light">Purchase Now </Button>
								</ButtonWrap>
							</FooterContent>
						</Col>
					</Row>
				</Container>
			</FooterInner>
		</FooterWrap>
	)
}

Footer.propTypes = {
	heading: PropTypes.object,
	subheading: PropTypes.object
}

Footer.defaultProps = {
	heading: {
		color: '#fff'
	},
	subheading: {
		as: 'h6',
		color: '#fff',
		letterSpacing: '7px',
		mt: '25px'
	}
}

export default Footer;