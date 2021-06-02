import * as React from "react";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header";
import Footer from "@layout/footer/footer-one";
import PageHeader from "@components/pageheader";
import Cta from "@containers/global/cta-area/section-one";
import SectionOne from '@containers/elements/social-networks/section-one'
import SectionTwo from '@containers/elements/social-networks/section-two'

const ProgressCirclePage = ({ pageContext, location }) => {
	return (
		<Layout location={location}>
			<Seo title="Social Networks" />
			<Header />
			<PageHeader
				pageContext={pageContext}
				location={location}
				title="Social Networks"
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

export default ProgressCirclePage
