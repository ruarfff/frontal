import PageHeader from "@components/pageheader";
import Seo from "@components/seo";
import SectionOne from '@containers/elements/dividers/section-one';
import SectionThree from '@containers/elements/dividers/section-three';
import SectionTwo from '@containers/elements/dividers/section-two';
import Cta from "@containers/global/cta-area/section-one";
import Layout from "@layout";
import Footer from "@layout/footer/footer-one";
import Header from '@layout/header';
import * as React from "react";

const DividersPage = ({ pageContext, location }) => {
	return (
		<Layout location={location}>
			<Seo title="Dividers" />
			<Header />
			<PageHeader
				pageContext={pageContext}
				location={location}
				title="Dividers"
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

export default DividersPage
