import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import Heading from "@ui/heading";
import Text from "@ui/text";
import {
	PluginsWrap,
	ImageWrap,
	PluginsTextWrap,
	FeaturesWrap,
	IconBoxWrap,
	IconBoxImage,
	IconBoxContent
} from './plugins.style'

const CaseStudy = ({ titleStyle, textStyle }) => {
	const pluginsData = useStaticQuery(graphql`
        query PluginQuery {
            landingJson(id: {eq: "plugins"}) {
                id
                image {
                    childImageSharp {
						gatsbyImageData(
							layout: CONSTRAINED
							width: 724
							height: 708
							formats: WEBP
							placeholder: TRACED_SVG
						)
                    }
                }
                features {
                    title
                    desc
                    icon {
                        childImageSharp {
							gatsbyImageData(
								layout: FIXED
								width: 86
								height: 86
								formats: WEBP
								placeholder: TRACED_SVG
								quality: 100
							)
                        }
                    }
                }
            }
            file(relativePath: {eq: "images/bg/mitech-landing-header-preview-bg.png"}) {
                childImageSharp {
					gatsbyImageData(
						layout: CONSTRAINED
						width: 656
						height: 595
						formats: WEBP
						placeholder: TRACED_SVG
						quality: 100
					)
                }
            }
        }      
    `);
	const data = pluginsData.landingJson;
	const features = data.features;
	const bgImage = convertToBgImage(getImage(pluginsData.file))

	return (
		<PluginsWrap {...bgImage}>
			<Container fluid>
				<Row className="align-items-center">
					<Col lg={6}>
						<PluginsTextWrap>
							{features.map((feature, i) => {
								return (
									<FeaturesWrap key={`features-${i}`}>
										<IconBoxWrap>
											<IconBoxImage>
												<GatsbyImage image={getImage(feature.icon)} alt={feature.title} />
											</IconBoxImage>
											<IconBoxContent>
												<Heading {...titleStyle}>{feature.title}</Heading>
												<Text {...textStyle}>{feature.desc}</Text>
											</IconBoxContent>
										</IconBoxWrap>
									</FeaturesWrap>
								)
							})}
						</PluginsTextWrap>
					</Col>
					<Col lg={6}>
						<ImageWrap>
							<GatsbyImage
								alt={data.id}
								image={getImage(data.image)}
							/>
						</ImageWrap>
					</Col>
				</Row>
			</Container>
		</PluginsWrap>
	)
}

CaseStudy.propTypes = {
	titleStyle: PropTypes.object
}

CaseStudy.defaultProps = {
	titleStyle: {
		as: "h5"
	},
	textStyle: {
		mt: '10px'
	}
}

export default CaseStudy;