import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import SectionTitle from "@ui/section-title";
import FeatureBox from "@components/box-image/layout-seven";
import { ExtraFeaturesWrap } from "./extra-features.style";

const ExtraFeatures = ({ sectionTitle }) => {

	const featureData = useStaticQuery(graphql`
    query ExtraFeatureQuery {
        landingJson(id: {eq: "extra_features"}) {
          id
          items {
            title
            id
            desc
            image {
                childImageSharp {
					gatsbyImageData(
						layout: FIXED
						width: 68
						height: 68
						formats: WEBP
						placeholder: TRACED_SVG
						quality: 100
					)
                }
            }
          }
        }
      }
      
    `)

	const features = featureData.landingJson.items;

	return (
		<ExtraFeaturesWrap>
			<Container>
				<Row>
					<Col lg={12}>
						<SectionTitle
							{...sectionTitle}
							subtitle="Extra Features"
							title="<span>Richness</span> of Theme Features"
						/>
					</Col>
				</Row>
				<Row>
					{features.map(feature => {
						return (
							<Col lg={4} md={6} key={feature.id}>
								<FeatureBox
									title={feature.title}
									desc={feature.desc}
									imageSrc={feature.image}
								/>
							</Col>
						)
					})}
				</Row>
			</Container>
		</ExtraFeaturesWrap>
	)
}

ExtraFeatures.propTypes = {
	sectionTitle: PropTypes.object
}

ExtraFeatures.defaultProps = {
	sectionTitle: {
		mb: '40px'
	}
}

export default ExtraFeatures;