import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import PricingTable from "@ui/pricing-table/layout-two";
import { SectionWrap } from "./style";

const PricingTableSection = () => {
	const pricingItems = [
		{
			id: "pricing-free",
			title: "Free",
			price: 0,
			path: "/contact-us",
			features: [
				{
					id: "free-feature-1",
					text: "03 projects"
				},
				{
					id: "free-feature-2",
					text: "Power And Predictive Dialing"
				},
				{
					id: "free-feature-3",
					text: "Quality & Customer Experience"
				},
				{
					id: "free-feature-4",
					text: "Try for free, forever!"
				}
			]
		},
		{
			id: "pricing-personal",
			title: "Personal",
			price: 19,
			path: "/contact-us",
			is_featured: true,
			features: [
				{
					id: "personal-feature-1",
					text: "10 projects"
				},
				{
					id: "personal-feature-2",
					text: "Power And Predictive Dialing"
				},
				{
					id: "personal-feature-3",
					text: "Quality & Customer Experience"
				},
				{
					id: "personal-feature-4",
					text: "24/7 phone and email support"
				}
			]
		},
		{
			id: "pricing-group",
			title: "Group",
			price: 29,
			path: "/contact-us",
			features: [
				{
					id: "group-feature-1",
					text: "50 projects"
				},
				{
					id: "group-feature-2",
					text: "Power And Predictive Dialing"
				},
				{
					id: "group-feature-3",
					text: "Quality & Customer Experience"
				},
				{
					id: "group-feature-4",
					text: "24/7 phone and email support"
				}
			]
		},
		{
			id: "pricing-enterprise",
			title: "Enterprise",
			price: 49,
			path: "/contact-us",
			features: [
				{
					id: "enterprise-feature-1",
					text: "Unlimited projects"
				},
				{
					id: "enterprise-feature-2",
					text: "Power And Predictive Dialing"
				},
				{
					id: "enterprise-feature-3",
					text: "Quality & Customer Experience"
				},
				{
					id: "enterprise-feature-4",
					text: "24/7 phone and email support"
				}
			]
		},
	];
	return (
		<SectionWrap>
			<Container>
				<Row>
					<Col lg={12}>
						<SectionTitle
							mb="50px"
							title="Great price plan <span>for you!</span>"
							subtitle="PRICING AND PLAN"
						/>
					</Col>
				</Row>
				<Row>
					{pricingItems.map(pricing => (
						<Col md={6} xl={3} key={pricing.id}>
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
