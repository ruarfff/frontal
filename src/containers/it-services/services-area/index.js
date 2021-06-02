import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Heading from "@ui/heading";
import Anchor from "@ui/anchor";
import { Container, Row, Col } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import FeatureBox from "@components/box-image/layout-one";
import { SectionWrap, SectionBottom } from './services-area.style'

const ServicesArea = (props) => {
	const featuredDataQuery = useStaticQuery(graphql`
        query ITServicesQueryData {
            allItServicesJson(sort: {order: DESC, fields: id}, limit: 6) {
                edges {
                  node {
                    fields {
                        slug
                    }
                    id
                    title
                    excerpt
                    icon {
                      img{
                        childImageSharp{
							gatsbyImageData(
								layout: FIXED
								width: 100
								height: 108
								placeholder: TRACED_SVG
								formats: WEBP
								quality: 100
							)
                        }
                      }
                    }
                  }
                }
            }
        }
    `);
	const featureData = featuredDataQuery.allItServicesJson.edges;
	const { linkStyle, headingStyle } = props;
	return (
		<SectionWrap>
			<Container>
				<Row>
					<Col lg={12}>
						<SectionTitle
							subtitle="Our Services"
							title="For your very specific industry, <br/> we have <span>highly-tailored IT solutions.</span>"
						/>
					</Col>
				</Row>
				<Row>
					{featureData.map(feature => (
						<Col lg={4} md={6} className="box-item" key={feature.node.id}>
							<FeatureBox
								title={feature.node.title}
								imageSrc={feature.node.icon.img}
								desc={feature.node.excerpt}
								path={`/it-service/${feature.node.fields.slug}`}
							/>
						</Col>
					))}
				</Row>
				<Row>
					<Col lg={12}>
						<SectionBottom>
							<Heading {...headingStyle}>Challenges are just opportunities in disguise. <Anchor {...linkStyle} path="/">Take the challenge!</Anchor></Heading>
						</SectionBottom>
					</Col>
				</Row>
			</Container>
		</SectionWrap>
	)
}

ServicesArea.propTypes = {
	headingStyle: PropTypes.object,
	linkStyle: PropTypes.object
}

ServicesArea.defaultProps = {
	headingStyle: {
		as: 'h3',
		fontSize: '18px',
		fontweight: 500,
		lineHeight: 1.40,
		color: '#333333'
	},
	linkStyle: {
		layout: 'underline',
		hover: {
			layout: 2
		}
	}
}

export default ServicesArea;