import PageHeader from "@components/pageheader";
import Seo from "@components/seo";
import ContactArea from '@containers/global/contact-area/contact-two';
import ServicesArea from '@containers/it-services/services-area';
import Layout from "@layout";
import Footer from "@layout/footer/footer-one";
import Header from '@layout/header';
import * as React from "react";

const ITServicePage = ({ pageContext, location }) => (
	<Layout location={location}>
		<Seo title="IT Services" />
		<Header />
		<PageHeader
			pageContext={pageContext}
			location={location}
			title="IT Services"
		/>
		<main className="site-wrapper-reveal">
			<ServicesArea />
			<ContactArea />
		</main>
		<Footer />
	</Layout>
)

export default ITServicePage
