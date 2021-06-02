import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import PricingTable from "@ui/pricing-table/layout-one";
import { SectionWrap } from './pricing-area.style'

const PricingArea = ({ sectionTitleStyle }) => {
	const pricingData = useStaticQuery(graphql`
        query ServicePricingQuery {
            indexServicesJson(id: {eq: "services-pricing-contnet"}) {
                title
                subtitle
            }
            pricingJson(period: {eq: "monthly"}) {
                period
                items {
                    id
                    title
                    price 
                    is_featured
                    path
                    features {
                        id
                        text
                    }
                    image {
                        childImageSharp {
							gatsbyImageData(
								layout: FIXED
								width: 90
								height: 90
								placeholder: TRACED_SVG
								formats: WEBP
								quality: 100
							)
                        }
                    }
                }
            }
        }
    `)
	const { title, subtitle } = pricingData.indexServicesJson;
	const { period, items: pricings } = pricingData.pricingJson;
	return (
		<SectionWrap>
			<Container>
				<Row>
					<Col lg={12}>
						<SectionTitle
							{...sectionTitleStyle}
							title={title}
							subtitle={subtitle}
						/>
					</Col>
				</Row>
				<Row alignitems="center">
					{pricings && pricings.map(pricing => (
						<Col lg={4} md={6} key={pricing.id}>
							<PricingTable
								period={period}
								title={pricing.tiele}
								price={pricing.price}
								path={pricing.path}
								features={pricing.features}
								image={pricing.image}
								isFeatured={pricing.is_featured}
							/>
						</Col>
					))}
				</Row>
			</Container>
		</SectionWrap>
	)
}

PricingArea.defaultProps = {
	sectionTitleStyle: {
		mb: '60px',
		responsive: {
			small: {
				mb: '47px'
			}
		}
	}
}

export default PricingArea
