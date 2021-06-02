import PageHeader from "@components/pageheader";
import Seo from "@components/seo";
import TypedText from '@containers/elements/typed-text';
import Cta from "@containers/global/cta-area/section-one";
import Layout from "@layout";
import Footer from "@layout/footer/footer-one";
import Header from '@layout/header';
import * as React from "react";

const TypedTextPage = ({ pageContext, location }) => {
	return (
		<Layout location={location}>
			<Seo title="Typed Text" />
			<Header />
			<PageHeader
				pageContext={pageContext}
				location={location}
				title="Typed Text"
			/>
			<main className="site-wrapper-reveal">
				<TypedText />
				<Cta />
			</main>
			<Footer />
		</Layout>
	)
}

export default TypedTextPage
