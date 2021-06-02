import PageHeader from "@components/pageheader";
import Seo from "@components/seo";
import ButtonSection from '@containers/elements/button/button-section';
import Cta from "@containers/global/cta-area/section-one";
import Layout from "@layout";
import Footer from "@layout/footer/footer-one";
import Header from '@layout/header';
import * as React from "react";


const ButtonPage = ({ pageContext, location }) => {
	return (
		<Layout location={location}>
			<Seo title="Buttons" />
			<Header />
			<PageHeader
				pageContext={pageContext}
				location={location}
				title="Buttons"
			/>
			<main className="site-wrapper-reveal">
				<ButtonSection />
				<Cta />
			</main>
			<Footer />
		</Layout>
	)
}

export default ButtonPage
