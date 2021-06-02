import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Row, Col } from "@ui/wrapper";
import PricingTable from "@ui/pricing-table/layout-one";

const MonthlPricing = () => {
	const getYearlyPricing = useStaticQuery(graphql`
        query GET_YEARLY_PRICING {
            pricingJson(period: {eq: "yearly"}) {
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
	const { pricingJson: { period, items: pricings } } = getYearlyPricing;
	return (
		<Row>
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
	)
}

export default MonthlPricing
