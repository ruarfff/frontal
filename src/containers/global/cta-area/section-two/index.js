import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import Section, { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import Button from "@ui/button";

const CTASection = ({
	sectionStyle,
	heading,
	text,
	ButtonOne,
	ButtonTwo,
	...props
}) => {
	const ctaData = useStaticQuery(graphql`
        query CtaTwoImgQuery {
            file(relativePath: {eq: "images/bg/cta-bg.png"}) {
                childImageSharp {
					gatsbyImageData(
						layout: CONSTRAINED
						width: 779
						height: 746
						placeholder: TRACED_SVG
						formats: WEBP
						quality: 100
					)
                }
            }
        } 
    `);

	const imageData = convertToBgImage(getImage(ctaData.file))

	return (
		<Section {...sectionStyle} bgImage={imageData}>
			<Container>
				<Row className="align-items-center text-lg-left text-center">
					<Col xl={8} lg={7}>
						<Heading {...heading}>Assess your business potentials and find opportunities <span>for bigger success </span> </Heading>
					</Col>
					<Col xl={4} lg={5} className="text-center">
						<Button
							to="/"
							{...ButtonOne}
							icon="far fa-comment-alt-dots"
							iconposition="left"
							icondistance="8px"
							iconsize="16px">
							Let 's talk
                        </Button>
						<Button
							to="/"
							{...ButtonTwo}
							icon="far fa-info-circle"
							iconposition="left"
							icondistance="8px"
							iconsize="16px">
							Get Info
                        </Button>
					</Col>
				</Row>
			</Container>
		</Section>
	)
}

CTASection.propTypes = {
	heading: PropTypes.object
}

CTASection.defaultProps = {
	sectionStyle: {
		bgColor: '#f6f2ed',
		bgposition: 'top 35% right -68px',
		bgsize: 'auto',
		pt: '80px',
		pb: '80px',
		responsive: {
			medium: {
				pt: '60px',
				pb: '60px'
			},
			small: {
				pt: '40px',
				pb: '40px'
			}
		}
	},
	heading: {
		as: 'h3',
		child: {
			color: 'primary'
		},
		responsive: {
			medium: {
				mb: '10px'
			}
		}
	},
	text: {
		as: 'span',
		color: 'secondary'
	},
	ButtonOne: {
		skin: 'primary',
		m: '7px'
	},
	ButtonTwo: {
		skin: 'secondary',
		m: '7px'
	}
}


export default CTASection