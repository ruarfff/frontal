import PageHeader from "@components/pageheader";
import Seo from "@components/seo";
import ContactArea from '@containers/global/contact-area/contact-two';
import HistoryArea from '@containers/our-history/history-area';
import IntroArea from '@containers/our-history/intro-area';
import Layout from "@layout";
import Footer from "@layout/footer/footer-one";
import Header from '@layout/header';
import * as React from "react";

const HistoryPage = ({ pageContext, location }) => (
	<Layout location={location}>
		<Seo title="Our History" />
		<Header />
		<PageHeader
			pageContext={pageContext}
			location={location}
			title="Our History"
		/>
		<main className="site-wrapper-reveal">
			<IntroArea />
			<HistoryArea />
			<ContactArea />
		</main>
		<Footer />
	</Layout>
)

export default HistoryPage
