import PageHeader from "@components/pageheader";
import Seo from "@components/seo";
import SectionOne from '@containers/elements/lists/section-one';
import Cta from "@containers/global/cta-area/section-one";
import Layout from "@layout";
import Footer from "@layout/footer/footer-one";
import Header from '@layout/header';
import * as React from "react";

const ButtonPage = ({ pageContext, location }) => {
	return (
		<Layout location={location}>
			<Seo title="List Item" />
			<Header />
			<PageHeader
				pageContext={pageContext}
				location={location}
				title="List Item"
			/>
			<main className="site-wrapper-reveal">
				<SectionOne />
				<Cta />
			</main>
			<Footer />
		</Layout>
	)
}

export default ButtonPage
