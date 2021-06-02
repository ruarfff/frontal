import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import PricingTable from "@ui/pricing-table/layout-one";
import SectionTitle from "@ui/section-title";
import imageOne from "@data/images/icons/icon-29-90x90.png";
import imageTwo from "@data/images/icons/icon-30-90x90.png";
import { SectionWrap } from "./style";

const PricingTableSection = () => {
	const pricingItems = [
		{
			id: "pricing-basic",
			title: "basic",
			image: imageOne,
			price: 19,
			path: "/contact-us",
			features: [
				{
					id: "basic-feature-1",
					text: "03 projects"
				},
				{
					id: "basic-feature-2",
					text: "Quality & Customer Experience"
				},
				{
					id: "basic-feature-3",
					text: "Try for free, forever!"
				}
			]
		},
		{
			id: "pricing-proffessional",
			title: "proffessional",
			image: imageTwo,
			is_featured: true,
			price: 59,
			path: "/contact-us",
			features: [
				{
					id: "proffessional-feature-1",
					text: "Unlimited project"
				},
				{
					id: "proffessional-feature-2",
					text: "Power And Predictive Dialing"
				},
				{
					id: "proffessional-feature-3",
					text: "Quality & Customer Experience"
				},
				{
					id: "proffessional-feature-4",
					text: "24/7 phone and email support"
				}
			]
		},
		{
			id: "pricing-business",
			title: "business",
			image: imageOne,
			price: 29,
			path: "/contact-us",
			features: [
				{
					id: "business-feature-1",
					text: "10 projects"
				},
				{
					id: "business-feature-2",
					text: "Power And Predictive Dialing"
				},
				{
					id: "business-feature-3",
					text: "Quality & Customer Experience"
				}
			]
		}
	];

	return (
		<SectionWrap>
			<Container>
				<Row>
					<Col lg={12}>
						<SectionTitle
							mb="45px"
							title="1 monthly fee for <span>all IT services.</span>"
							subtitle="PRICING AND PLAN"
						/>
					</Col>
				</Row>
				<Row alignitems="center">
					{pricingItems.map(pricing => (
						<Col lg={4} md={6} key={pricing.id}>
							<PricingTable
								title={pricing.title}
								image={pricing.image}
								price={pricing.price}
								path={pricing.path}
								features={pricing.features}
								isFeatured={pricing.is_featured}
							/>
						</Col>
					))}
				</Row>
			</Container>
		</SectionWrap>
	)
}

export default PricingTableSection
