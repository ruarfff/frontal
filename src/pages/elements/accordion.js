import PageHeader from "@components/pageheader";
import Seo from "@components/seo";
import SectionOne from '@containers/elements/accordion/section-one';
import SectionTwo from '@containers/elements/accordion/section-two';
import Cta from "@containers/global/cta-area/section-one";
import Layout from "@layout";
import Footer from "@layout/footer/footer-one";
import Header from '@layout/header';
import * as React from "react";

const AccordionsPage = ({ pageContext, location }) => {
	return (
		<Layout location={location}>
			<Seo title="Accordions" />
			<Header />
			<PageHeader
				pageContext={pageContext}
				location={location}
				title="Accordions"
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

export default AccordionsPage
