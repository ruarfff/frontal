import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql, Link } from "gatsby"
import { Container, Row, Col } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import Button from "@ui/button";
import BoxIcon from "@components/box-icon/layout-two";
import { ServicesWrapper, SectionBottom } from './services-area.style'

const Services = ({
	sectionTitleStyle,
	buttonOneStyle,
	buttonTwoStyle }) => {
	const serviceQueryData = useStaticQuery(graphql`
      query ServicesServiceQuery {
          indexServicesJson(id: {eq: "services-services-contnet"}) {
              title
              subtitle
              path
          }
          allItServicesJson(sort: {order: DESC, fields: id}, filter: {is_featured: {eq: true}}) {
              edges {
                  node {
                      fields {
                        slug
                      }
                      id
                      title
                      excerpt
                      icon {
                        svg {
                          publicURL
                        }
                      }
                  }
              }
          }
      }
    `);

	const secdata = serviceQueryData.indexServicesJson;
	const serviceData = serviceQueryData.allItServicesJson.edges;

	return (
		<ServicesWrapper>
			<Container>
				<Row>
					<Col lg={12}>
						<SectionTitle
							{...sectionTitleStyle}
							subtitle={secdata.subtitle}
							title={secdata.title}
						/>
					</Col>
				</Row>
				<Row>
					{serviceData.map(feature => {
						return (
							<Col lg={4} md={6} key={feature.node.id}>
								<BoxIcon
									id={feature.node.id}
									title={feature.node.title}
									desc={feature.node.excerpt}
									icon={feature.node.icon}
									path={`/it-service/${feature.node.fields.slug}`}
								/>
							</Col>
						)
					})}
				</Row>
				<Row>
					<Col lg={12}>
						<SectionBottom className="text-center">
							<Button as={Link} to={secdata.path} {...buttonOneStyle}>Talk to a consultant</Button>
							<Button as={Link} to={secdata.path} {...buttonTwoStyle}>Contact us now </Button>
						</SectionBottom>
					</Col>
				</Row>
			</Container>
		</ServicesWrapper>
	)
}

Services.propTypes = {
	sectionTitleStyle: PropTypes.object,
	buttonOneStyle: PropTypes.object,
	buttonTwoStyle: PropTypes.object
}

Services.defaultProps = {
	sectionTitleStyle: {
		mb: '40px',
		responsive: {
			small: {
				mb: '30px'
			}
		}
	},
	buttonOneStyle: {
		m: '10px',
		hover: '2'
	},
	buttonTwoStyle: {
		m: '10px',
		varient: 'outlined'
	}
}

export default Services;