import PageHeader from "@components/pageheader";
import Seo from "@components/seo";
import Gradation from '@containers/elements/gradation';
import Cta from "@containers/global/cta-area/section-one";
import Layout from "@layout";
import Footer from "@layout/footer/footer-one";
import Header from '@layout/header';
import * as React from "react";

const GoogleMapPage = ({ pageContext, location }) => {
	return (
		<Layout location={location}>
			<Seo title="Gradation" />
			<Header />
			<PageHeader
				pageContext={pageContext}
				location={location}
				title="Gradation"
			/>
			<main className="site-wrapper-reveal">
				<Gradation />
				<Cta />
			</main>
			<Footer />
		</Layout>
	)
}

export default GoogleMapPage
