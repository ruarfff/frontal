import PageHeader from "@components/pageheader";
import Seo from "@components/seo";
import SectionOne from "@containers/global/cta-area/section-one";
import SectionTwo from '@containers/global/cta-area/section-two';
import Layout from "@layout";
import Footer from "@layout/footer/footer-one";
import Header from '@layout/header';
import * as React from "react";

const ButtonPage = ({ pageContext, location }) => {
	return (
		<Layout location={location}>
			<Seo title="Call To Action" />
			<Header />
			<PageHeader
				pageContext={pageContext}
				location={location}
				title="Call To Action"
			/>
			<main className="site-wrapper-reveal">
				<SectionOne />
				<SectionTwo />
			</main>
			<Footer />
		</Layout>
	)
}

export default ButtonPage
