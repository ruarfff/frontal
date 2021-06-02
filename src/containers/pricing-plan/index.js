import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import Tabs, { TabHeader, NavItem, TabContent, TabPane } from "@ui/tabs/layout-two";
import MonthlyPricing from './monthly'
import YearlyPricing from './yearly'
import { SectionWrap } from "./style";

const PricingPlan = () => {
	return (
		<SectionWrap>
			<Container>
				<Row>
					<Col lg={12}>
						<SectionTitle
							mb="50px"
							title="Affordable price plans <span>for you!</span>"
							subtitle="Price and Plans"
						/>
					</Col>
					<Col lg={12}>
						<Tabs id="pricing-tab" defaultActiveKey="monthly">
							<TabHeader>
								<NavItem eventKey="monthly">Per Month</NavItem>
								<NavItem eventKey="yearly">Per Year</NavItem>
							</TabHeader>
							<TabContent>
								<TabPane eventKey="monthly">
									<MonthlyPricing />
								</TabPane>
								<TabPane eventKey="yearly">
									<YearlyPricing />
								</TabPane>
							</TabContent>
						</Tabs>
					</Col>
				</Row>
			</Container>
		</SectionWrap>
	)
}

export default PricingPlan
