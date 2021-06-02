import PageHeader from "@components/pageheader";
import Seo from "@components/seo";
import SectionOne from '@containers/elements/counters/section-one';
import SectionThree from '@containers/elements/counters/section-three';
import SectionTwo from '@containers/elements/counters/section-two';
import Cta from "@containers/global/cta-area/section-one";
import Layout from "@layout";
import Footer from "@layout/footer/footer-one";
import Header from '@layout/header';
import * as React from "react";

const ButtonPage = ({ pageContext, location }) => {
	return (
		<Layout location={location}>
			<Seo title="Counters" />
			<Header />
			<PageHeader
				pageContext={pageContext}
				location={location}
				title="Counters"
			/>
			<main className="site-wrapper-reveal">
				<SectionOne />
				<SectionTwo />
				<SectionThree />
				<Cta />
			</main>
			<Footer />
		</Layout>
	)
}

export default ButtonPage
