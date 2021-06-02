import BoxIcon from "@components/box-icon/layout-four";
import ContactFrom from "@components/forms/contact-form";
import Anchor from "@ui/anchor";
import Heading from "@ui/heading";
import Text from "@ui/text";
import { Box, Col, Container, Row } from "@ui/wrapper";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import PropTypes from "prop-types";
import React from "react";
import { ContactFormBox, ContactFormTitle, ContactInfoBox, SectionWrap } from './contact-area.style';

const ContactArea = ({ ratingHeadingStyle, boxIconStyle, ratingStyle, textStyle }) => {
	const contactData = useStaticQuery(graphql`
        query ContactFourQuery {
            info: site {
                siteMetadata {
                    contact {
                        phone
                        email
                        rating
                        customers
                        clients
                    }
                }
            }
            bgImage: file(relativePath: {eq: "images/bg/contact-section-bg-3.png"}) {
                childImageSharp {
					gatsbyImageData(
						layout: CONSTRAINED
						width: 626
						height: 982
						placeholder: TRACED_SVG
						formats: WEBP
						quality: 100
					)
                }
            }
        }
    `)
	const { phone, email } = contactData.info.siteMetadata.contact;
	const bgImage = convertToBgImage(getImage(contactData.bgImage));

	return (
		<SectionWrap {...bgImage}>
			<Container>
				<Row alignitems="center">
					<Col lg={4}>
						<ContactInfoBox>
							<Box>
								<Anchor display="block" path={`tel:${phone}`}>
									<BoxIcon
										{...boxIconStyle}
										icon="fal fa-phone"
										heading="Call for advice now!"
										title={phone}
									/>
								</Anchor>
								<Anchor display="block" path={`mailto:${email}`}>
									<BoxIcon
										{...boxIconStyle}
										icon="fal fa-envelope"
										heading="Say hello"
										title={email}
									/>
								</Anchor>
							</Box>
						</ContactInfoBox>
					</Col>
					<Col lg={7} ml="auto">
						<ContactFormBox>
							<ContactFormTitle>
								<Heading as="h3" mb="10px">Need a hand?</Heading>
								<Text>Reach out to the world’s most reliable IT services.</Text>
							</ContactFormTitle>
							<ContactFrom />
						</ContactFormBox>
					</Col>
				</Row>
			</Container>
		</SectionWrap>
	)
}

ContactArea.propTypes = {
	sectionStyle: PropTypes.object
}

ContactArea.defaultProps = {
	boxIconStyle: {
		wrapperStyle: {
			alignitems: 'center',
			mt: '55px'
		},
		iconStyle: {
			fontSize: '40px',
			mr: "25px",
			fontweight: 300,
			color: "#fff"
		},
		titleStyle: {
			fontSize: '34px',
			mb: "0",
			color: "secondary",
			fontweight: 700,
			lineHeight: 1.17,
			responsive: {
				large: {
					fontSize: "24px"
				}
			}
		},
		headingStyle: {
			color: "#fff"
		}
	},
	ratingStyle: {
		mt: '10px',
		mb: '10px'
	},
	ratingHeadingStyle: {
		as: "h3",
		color: '#fff'
	},
	textStyle: {
		fontSize: '18px',
		color: '#fff'
	}
}

export default ContactArea;
