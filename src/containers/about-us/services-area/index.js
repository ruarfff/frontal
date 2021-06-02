import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import Anchor from "@ui/anchor";
import ServiceBox from "@components/box-image/layout-six";
import { ServicesWrapper } from './services-area.style'

const Services = ({ serviceBoxStyle, linkStyle, headingStyle }) => {
	const featuredDataQuery = useStaticQuery(graphql`
        query AboutServicesQueryData {
            allItServicesJson(sort: {order: DESC, fields: id}, filter: {is_featured: {eq: true}}, limit: 3) {
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
										quality: 100
										placeholder: TRACED_SVG
										formats: WEBP
									)
								}
							}
						}
					}
                }
            }
        }
    `);
	const services = featuredDataQuery.allItServicesJson.edges;
	return (
		<ServicesWrapper>
			<Container>
				<Row>
					{services && services.map(service => (
						<Col lg={4} md={6} key={service.node.id} {...serviceBoxStyle}>
							<ServiceBox
								title={service.node.title}
								desc={service.node.excerpt}
								imageSrc={service.node.icon.img}
								path={`/it-service/${service.node.fields.slug}`}
							/>
						</Col>
					))}
				</Row>
				<Row>
					<Col lg={12}>
						<Heading {...headingStyle}>Challenges are just opportunities in disguise. <Anchor {...linkStyle} path="/it-services">Take the challenge!</Anchor></Heading>
					</Col>
				</Row>
			</Container>
		</ServicesWrapper>
	)
}

Services.propTypes = {
	serviceBoxStyle: PropTypes.object,
	linkStyle: PropTypes.object,
	headingStyle: PropTypes.object,
}

Services.defaultProps = {
	serviceBoxStyle: {
		mb: "50px"
	},
	linkStyle: {
		layout: 'underline',
		hover: {
			layout: 2
		}
	},
	headingStyle: {
		as: 'h3',
		fontSize: '18px',
		fontweight: 500,
		lineHeight: 1.40,
		color: 'textColor',
		mt: '10px',
		textalign: 'center',
		responsive: {
			small: {
				mt: '5px'
			}
		}
	}
}

export default Services;