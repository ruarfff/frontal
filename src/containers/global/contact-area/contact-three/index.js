import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import { Container, Row, Col, Box } from "@ui/wrapper";
import Heading from "@ui/heading";
import Text from "@ui/text";
import Anchor from "@ui/anchor";
import Button from "@ui/button";
import { SectionWrap, ContactInfoBox } from './contact.style'

const ContactArea = ({
	headingStyle,
	descStyle,
	conactInfoStyles: {
		titleStyle,
		phoneAnchorStyle,
		btnStyle
	}
}) => {
	const contactQueryData = useStaticQuery(graphql`
        query {
            sectionBg: file(relativePath: {eq: "images/bg/contact-section-bg-2.png"}) {
                childImageSharp {
					gatsbyImageData(
						layout: CONSTRAINED
						width: 1192
						height: 630
						placeholder: TRACED_SVG
						formats: WEBP
						quality: 100
					)
                }
            }
            contactData: site {
                siteMetadata {
                  contact {
                    phone
                  }
                }
            }
        } 
    `);

	const { phone } = contactQueryData.contactData.siteMetadata.contact;
	const imageData = convertToBgImage(getImage(contactQueryData.sectionBg));

	return (
		<SectionWrap {...imageData}>
			<Container>
				<Row alignitems="center">
					<Col lg={6}>
						<Box>
							<Heading {...headingStyle}>Obtaining further information by <span>make a contact</span> with our experienced IT staffs.</Heading>
							<Text {...descStyle}>We’re available for 8 hours a day! <br /> Contact to require a detailed analysis and assessment of your plan</Text>
						</Box>
					</Col>
					<Col lg={6}>
						<ContactInfoBox>
							<i className="icon fal fa-phone"></i>
							<Heading {...titleStyle}>REACH OUT NOW!</Heading>
							{phone && (
								<Heading><Anchor path="/" {...phoneAnchorStyle}>{phone}</Anchor></Heading>
							)}
							<Button {...btnStyle}>Contact Us</Button>
						</ContactInfoBox>
					</Col>
				</Row>
			</Container>
		</SectionWrap>
	)
}

ContactArea.propTypes = {
	headingStyle: PropTypes.object
}

ContactArea.defaultProps = {
	headingStyle: {
		as: 'h3',
		position: 'relative',
		pl: '34px',
		fontweight: 600,
		lineHeight: 1.4,
		color: '#fff',
		before: {
			top: '50%',
			width: '4px',
			height: '94%',
			bgColor: 'secondary',
			transform: 'translateY(-50%)'
		}
	},
	descStyle: {
		mt: '15px',
		fontSize: '18px',
		color: '#fff',
		ml: '34px'
	},
	conactInfoStyles: {
		titleStyle: {
			as: 'h6',
			fontSize: '15px',
			color: '#fff',
			letterspacing: '2px',
			texttransform: 'uppercase',
			mb: '10px',
			mt: '10px',
		},
		phoneAnchorStyle: {
			color: 'secondary',
			hover: {
				layout: 2,
				color: 'secondary'
			}
		},
		btnStyle: {
			mt: '20px',
			skin: 'light',
			minwidth: '230px',
			color: 'primary',
			hover: {
				bgColor: 'secondary'
			}
		}
	}
}

export default ContactArea;