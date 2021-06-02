import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "@ui/heading";
import Button from "@ui/button";
import { HeroWrapper, HeroWrapperText, PreviewInnerImg } from './hero.style'

const Hero = ({ headingSecondary, headingPrimary, buttonStyle }) => {
	const heroData = useStaticQuery(graphql`
        query LandingHeroQuery {
            landingJson(id: {eq: "landing-hero-content"}) {
                title
                subtitle
                bgImage {
                    childImageSharp {
						gatsbyImageData(
							layout: FULL_WIDTH
							placeholder: TRACED_SVG
							formats: WEBP
							quality: 100
						)
                    }
                }
                image1 {
                    childImageSharp {
						gatsbyImageData(
							layout: CONSTRAINED
							width: 939
							height: 696
							placeholder: TRACED_SVG
							formats: WEBP
							quality: 100
						)
                    }
                }
                image2 {
                    childImageSharp {
						gatsbyImageData(
							layout: CONSTRAINED
							width: 337
							height: 383
							placeholder: TRACED_SVG
							formats: WEBP
							quality: 100
						)
                    }
                }
                image3 {
                    childImageSharp {
						gatsbyImageData(
							layout: CONSTRAINED
							width: 119
							height: 184
							placeholder: TRACED_SVG
							formats: WEBP
							quality: 100
						)
                    }
                }
                image4 {
                    childImageSharp {
						gatsbyImageData(
							layout: CONSTRAINED
							width: 435
							height: 360
							placeholder: TRACED_SVG
							formats: WEBP
							quality: 100
						)
                    }
                }
                image5 {
                    childImageSharp {
						gatsbyImageData(
							layout: CONSTRAINED
							width: 356
							height: 68
							placeholder: TRACED_SVG
							formats: WEBP
							quality: 100
						)
                    }
                }
            }
        }    
    `);

	const { title, subtitle, bgImage, image1, image2, image3, image4, image5 } = heroData.landingJson;
	const bgConvImg = convertToBgImage(getImage(bgImage));

	return (
		<HeroWrapper {...bgConvImg}>
			<Container fluid className="xp-150">
				<Row className="align-items-center h-100">
					<Col lg={6}>
						<HeroWrapperText>
							{subtitle && <Heading {...headingSecondary}>{subtitle}</Heading>}
							{title && <Heading {...headingPrimary}>{title}</Heading>}
							<Button {...buttonStyle}>Browse demos</Button>
						</HeroWrapperText>
					</Col>
					<Col lg={6}>
						<PreviewInnerImg>
							<GatsbyImage image={getImage(image1)} className="img-fluid min-img animation_images one wow fadeInDown" alt="Preview Hero" />
						</PreviewInnerImg>
					</Col>
				</Row>
				<GatsbyImage image={getImage(image2)} className="img-fluid pr-img-01 animation_images two wow fadeInDown" alt="Preview Hero" />
				<GatsbyImage image={getImage(image3)} className="img-fluid pr-img-02 animation_images two wow fadeInDown" alt="Preview Hero" />
				<GatsbyImage image={getImage(image4)} className="img-fluid pr-img-03 animation_images two wow fadeInDown" alt="Preview Hero" />
				<GatsbyImage image={getImage(image5)} className="img-fluid pr-img-04 animation_images two wow fadeInDown" alt="Preview Hero" />
			</Container>
		</HeroWrapper>
	)
}

Hero.propTypes = {
	headingSecondary: PropTypes.object,
	headingPrimary: PropTypes.object
}

Hero.defaultProps = {
	headingSecondary: {
		as: 'h6',
		color: 'secondary',
		letterspacing: '2px',
		fontweight: 700,
		fontSize: '16px',
		texttransform: 'uppercase',
		mb: '30px'
	},
	headingPrimary: {
		as: 'h2',
		color: '#fff',
		fontweight: 500,
		mb: '30px'
	},
	buttonStyle: {
		to: '#section-demos',
		skin: 'light',
		mt: '40px',
		responsive: {
			xlarge: {
				mt: '10px'
			}
		}
	}
}

export default Hero;