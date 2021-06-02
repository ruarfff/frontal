import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import { Container, Row, Col, Box } from "@ui/wrapper";
import Heading from "@ui/heading";
import Text from "@ui/text";
import Ratings from "@components/ratings";
import BoxIcon from "@components/box-icon/layout-four";
import Anchor from "@ui/anchor";
import { SectionWrap, ImageBox, ContactInfoBox } from './contact.style'

const ContactArea = ({ boxIconStyle, ratingStyle, textStyle }) => {
	const contactData = useStaticQuery(graphql`
        query AboutContactQuery {
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
            bgImage: file(relativePath: {eq: "images/bg/contact-bg.jpg"}) {
                childImageSharp {
					gatsbyImageData(
						layout: FULL_WIDTH
						placeholder: TRACED_SVG
						formats: WEBP
						quality: 100
					)
                }
            }
            contactImg: file(relativePath: {eq: "images/contact-image.png"}) {
                childImageSharp {
					gatsbyImageData(
						layout: CONSTRAINED
						width: 572
						height: 587
						placeholder: TRACED_SVG
						formats: WEBP
						quality: 100
					)
                }
            }
        }
    `)
	const { phone, email, rating, customers, clients } = contactData.info.siteMetadata.contact;
	const bg_image = convertToBgImage(getImage(contactData.bgImage))

	return (
		<SectionWrap {...bg_image}>
			<Container>
				<Row alignitems="center">
					<Col lg={7}>
						<ImageBox>
							<GatsbyImage image={getImage(contactData.contactImg)} alt="Contact Us" />
						</ImageBox>
					</Col>
					<Col lg={4} ml="auto">
						<ContactInfoBox>
							<Box textalign="center">
								{rating && <Heading as="h3">{`${rating}/5.0`}</Heading>}
								<Ratings {...ratingStyle} rating={+rating} />
								<Text {...textStyle}>by {customers}+ customers for {clients}+ clients</Text>
							</Box>
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
			fontweight: 300
		},
		titleStyle: {
			fontSize: '34px',
			mb: "0",
			fontweight: 700,
			lineHeight: 1.17,
			responsive: {
				large: {
					fontSize: "24px"
				}
			}
		}
	},
	ratingStyle: {
		mt: '10px',
		mb: '10px'
	},
	textStyle: {
		fontSize: '18px'
	}
}

export default ContactArea;