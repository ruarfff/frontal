import PageHeader from "@components/pageheader";
import Seo from "@components/seo";
import SectionOne from '@containers/elements/google-map/section-one';
import SectionTwo from '@containers/elements/google-map/section-two';
import Cta from "@containers/global/cta-area/section-one";
import Layout from "@layout";
import Footer from "@layout/footer/footer-one";
import Header from '@layout/header';
import * as React from "react";

const GoogleMapPage = ({ pageContext, location }) => {
	return (
		<Layout location={location}>
			<Seo title="Google Map" />
			<Header />
			<PageHeader
				pageContext={pageContext}
				location={location}
				title="Google Map"
			/>
			<main className="site-wrapper-reveal">
				<SectionOne />
				<SectionTwo />
				<Cta />
			</main>
			<Footer />
		</Layout>
	)
}

export default GoogleMapPage
