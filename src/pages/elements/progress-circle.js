import * as React from "react";
import Seo from "@components/seo";
import Layout from "@layout";
import Header from "@layout/header";
import Footer from "@layout/footer/footer-one";
import PageHeader from "@components/pageheader";
import Cta from "@containers/global/cta-area/section-one";
import SectionOne from '@containers/elements/progress-circle/section-one'
import SectionTwo from '@containers/elements/progress-circle/section-two'
import SectionThree from '@containers/elements/progress-circle/section-three'

const ProgressCirclePage = ({ pageContext, location }) => {
	return (
		<Layout location={location}>
			<Seo title="Progress Circle" />
			<Header />
			<PageHeader
				pageContext={pageContext}
				location={location}
				title="Progress Circle"
			/>
			<main className="site-wrapper-reveal">
				<SectionOne />
				<SectionTwo />
				<SectionThree />
				<Cta />
			</main>
			<Footer />
		</Layout>
	)
}

export default ProgressCirclePage
