import * as React from "react";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header";
import Footer from "@layout/footer/footer-one";
import PageHeader from "@components/pageheader";
import Cta from "@containers/global/cta-area/section-one";
import SectionOne from '@containers/elements/tabs/section-one'
import SectionTwo from '@containers/elements/tabs/section-two'

const TabsPage = ({ pageContext, location }) => {
	return (
		<Layout location={location}>
			<Seo title="Tabs" />
			<Header />
			<PageHeader
				pageContext={pageContext}
				location={location}
				title="Tabs"
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

export default TabsPage
