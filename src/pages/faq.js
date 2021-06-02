import PageHeader from "@components/pageheader";
import Seo from "@components/seo";
import FaqSectionOne from '@containers/faq/section-one';
import FaqSectionTwo from '@containers/faq/section-two';
import ContactArea from '@containers/global/contact-area/contact-one';
import Layout from "@layout";
import Footer from "@layout/footer/footer-one";
import Header from '@layout/header';
import * as React from "react";

const FAQPage = ({ pageContext, location }) => (
	<Layout location={location}>
		<Seo title="Faq" />
		<Header />
		<PageHeader
			pageContext={pageContext}
			location={location}
			title="Faq"
		/>
		<main className="site-wrapper-reveal">
			<FaqSectionOne />
			<FaqSectionTwo />
			<ContactArea />
		</main>
		<Footer />
	</Layout>
)

export default FAQPage
