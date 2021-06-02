import PageHeader from "@components/pageheader";
import Seo from "@components/seo";
import MessageBoxSection from '@containers/elements/message-box';
import Cta from "@containers/global/cta-area/section-one";
import Layout from "@layout";
import Footer from "@layout/footer/footer-one";
import Header from '@layout/header';
import * as React from "react";

const MessageBoxPage = ({ pageContext, location }) => {
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
				<MessageBoxSection />
				<Cta />
			</main>
			<Footer />
		</Layout>
	)
}

export default MessageBoxPage
