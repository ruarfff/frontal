import * as React from "react";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header";
import Footer from "@layout/footer/footer-one";
import PageHeader from "@components/pageheader";
import PricingBoxOne from '@containers/elements/pricing-table/section-one'
import PricingBoxTwo from '@containers/elements/pricing-table/section-two'
import Cta from "@containers/global/cta-area/section-one";

const ButtonPage = ({ pageContext, location }) => {
	return (
		<Layout location={location}>
			<Seo title="Pricing Box" />
			<Header />
			<PageHeader
				pageContext={pageContext}
				location={location}
				title="Pricing Box"
			/>
			<main className="site-wrapper-reveal">
				<PricingBoxOne />
				<PricingBoxTwo />
				<Cta />
			</main>
			<Footer />
		</Layout>
	)
}

export default ButtonPage
