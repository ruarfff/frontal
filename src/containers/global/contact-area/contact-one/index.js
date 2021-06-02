import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import Text from "@ui/text";
import Anchor from "@ui/anchor";
import Button from "@ui/button";
import { SectionWrap, ContactInfoBox, ContactTextBox } from './contact.style'

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
            sectionBg: file(relativePath: {eq: "images/bg/contact-bg.jpg"}) {
					childImageSharp {
						gatsbyImageData(
							layout: FULL_WIDTH
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
	const { phone } = contactQueryData.contactData.siteMetadata.contact
	const bgImage = convertToBgImage(getImage(contactQueryData.sectionBg))
	return (
		<SectionWrap {...bgImage}>
			<Container>
				<Row alignitems="center">
					<Col lg={6}>
						<ContactTextBox>
							<Heading {...headingStyle}>Obtaining further information by <span>make a contact</span> with our experienced IT staffs.</Heading>
							<Text {...descStyle}>We’re available for 8 hours a day! <br /> Contact to require a detailed analysis and assessment of your plan</Text>
						</ContactTextBox>
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
		child: {
			color: 'primary'
		},
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
		ml: '34px'
	},
	conactInfoStyles: {
		titleStyle: {
			as: 'h6',
			fontSize: '15px',
			letterspacing: '2px',
			texttransform: 'uppercase',
			mb: '10px',
			mt: '10px',
		},
		phoneAnchorStyle: {
			color: '#002fa6',
			hover: {
				layout: 2,
				color: '#002fa6'
			}
		},
		btnStyle: {
			mt: '20px',
			skin: 'secondary',
			minwidth: '230px',
			hover: {
				bgColor: 'primary'
			}
		}
	}
}

export default ContactArea;