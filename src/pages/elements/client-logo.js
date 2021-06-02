import PageHeader from "@components/pageheader";
import Seo from "@components/seo";
import SectionFour from '@containers/elements/client-logo/section-four';
import SectionOne from '@containers/elements/client-logo/section-one';
import SectionThree from '@containers/elements/client-logo/section-three';
import SectionTwo from '@containers/elements/client-logo/section-two';
import Cta from "@containers/global/cta-area/section-one";
import Layout from "@layout";
import Footer from "@layout/footer/footer-one";
import Header from '@layout/header';
import * as React from "react";

const ButtonPage = ({ pageContext, location }) => {
	return (
		<Layout location={location}>
			<Seo title="Client Logo" />
			<Header />
			<PageHeader
				pageContext={pageContext}
				location={location}
				title="Client Logo"
			/>
			<main className="site-wrapper-reveal">
				<SectionOne />
				<SectionTwo />
				<SectionThree />
				<SectionFour />
				<Cta />
			</main>
			<Footer />
		</Layout>
	)
}

export default ButtonPage
