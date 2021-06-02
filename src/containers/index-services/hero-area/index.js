import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import Text from "@ui/text";
import Button from "@ui/button";
import { HeroWrapper, HeroTextBox } from './hero-area.style';

const HeroArea = (props) => {
	const HeroData = useStaticQuery(graphql`
        query ServicesHeroQuery {
            indexServicesJson(id: {eq: "services-hero-contnet"}) {
                title
                subtitle
                path
                desc
                bg_image {
                    childImageSharp {
						gatsbyImageData(
							layout: FULL_WIDTH
							placeholder: TRACED_SVG
							formats: WEBP
							quality: 100
						)
                    }
                }
            }
        }
    `)
	const { title, subtitle, path, desc, bg_image } = HeroData.indexServicesJson;
	const { titleStyle, subtitleStyle, descStyle, btnStyle } = props
	const bgImage = convertToBgImage(getImage(bg_image));
	return (
		<HeroWrapper {...bgImage}>
			<Container>
				<Row>
					<Col lg={12}>
						<HeroTextBox>
							{title && <Heading {...titleStyle}>{title}</Heading>}
							{subtitle && <Heading {...subtitleStyle}>{subtitle}</Heading>}
							{path && <Button {...btnStyle} to={path}>IT Services</Button>}
							{desc && <Text {...descStyle}>{desc}</Text>}
						</HeroTextBox>
					</Col>
				</Row>
			</Container>
		</HeroWrapper>
	)
}

HeroArea.propTypes = {
	titleStyle: PropTypes.object,
	subtitleStyle: PropTypes.object,
	descStyle: PropTypes.object,
	btnStyle: PropTypes.object
}

HeroArea.defaultProps = {
	titleStyle: {
		as: "h3",
		lineHeight: '36px',
		mb: '20px',
		color: '#fff'
	},
	subtitleStyle: {
		as: "h1",
		color: '#ffffff',
		fontSize: '120px',
		lineHeight: 1.09,
		mb: "30px",
		responsive: {
			large: {
				fontSize: '100px'
			},
			medium: {
				fontSize: '80px'
			},
			small: {
				fontSize: '70px'
			},
			xsmall: {
				fontSize: '40px'
			}
		}
	},
	btnStyle: {
		hover: "false",
		size: 'large'
	},
	descStyle: {
		mt: '30px',
		fontSize: '15px',
		fontWeight: 500,
		color: '#fff'
	}
}

export default HeroArea
