import PageHeader from "@components/pageheader";
import Seo from "@components/seo";
import ContactArea from '@containers/global/contact-area/contact-two';
import PricingTab from '@containers/pricing-plan';
import Layout from "@layout";
import Footer from "@layout/footer/footer-one";
import Header from '@layout/header';
import * as React from "react";

const PricingPage = ({ pageContext, location }) => (
	<Layout location={location}>
		<Seo title="Our Pricing Plan" />
		<Header />
		<PageHeader
			pageContext={pageContext}
			location={location}
			title="Our Pricing Plan"
		/>
		<main className="site-wrapper-reveal">
			<PricingTab />
			<ContactArea />
		</main>
		<Footer />
	</Layout>
)

export default PricingPage
