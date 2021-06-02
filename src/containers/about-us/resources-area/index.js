import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import { Container, Row, Col } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import Button from "@ui/button";
import { ResourcesWrapper, LeftBox, ImageBox } from './resources-area.style'

const Resources = ({ sectionTitleStyle }) => {
	const resources = useStaticQuery(graphql`
        query AboutResourcesQuery {
            resource: aboutUsJson(id: {eq: "about-page-resources"}) {
                title
                subtitle
                download_link
                image {
                    childImageSharp {
						gatsbyImageData(
							layout: CONSTRAINED
							width: 436
							height: 369
							placeholder: TRACED_SVG
							formats: WEBP
							quality: 100
						)
                    }
                }
            }
            bgImage: file(relativePath: {eq: "images/bg/cybersecurity-global-image.png"}) {
                childImageSharp {
					gatsbyImageData(
						layout: CONSTRAINED
						width: 780
						height: 746
						placeholder: TRACED_SVG
						formats: WEBP
						quality: 100
					)
                }
            }
        }
    `)
	const { title, subtitle, download_link, image } = resources.resource;
	const bgConvImg = convertToBgImage(getImage(resources.bgImage))
	return (
		<ResourcesWrapper {...bgConvImg}>
			<Container fluid>
				<Row alignitems="center">
					<Col lg={{ span: 6, order: 1 }} xs={{ order: 2, span: 12 }}>
						<LeftBox>
							{(title || subtitle) && (
								<SectionTitle
									{...sectionTitleStyle}
									title={title}
									subtitle={subtitle}
								/>
							)}
							{download_link && <Button to={download_link} hover="2">Download now (3MB)</Button>}
						</LeftBox>
					</Col>
					<Col lg={{ span: 6, order: 2 }} xs={{ order: 1, span: 12 }}>
						{image && (
							<ImageBox>
								<GatsbyImage image={getImage(image)} alt={title} />
							</ImageBox>
						)}
					</Col>
				</Row>
			</Container>
		</ResourcesWrapper>
	)
}

Resources.propTypes = {
	sectionTitleStyle: PropTypes.object
}

Resources.defaultProps = {
	sectionTitleStyle: {
		align: "left",
		mb: "30px",
		responsive: {
			medium: {
				align: "center"
			}
		}
	}
}

export default Resources;