import PageHeader from "@components/pageheader";
import Seo from "@components/seo";
import TimelineArea from '@containers/elements/timeline';
import Cta from "@containers/global/cta-area/section-one";
import Layout from "@layout";
import Footer from "@layout/footer/footer-one";
import Header from '@layout/header';
import * as React from "react";

const TimelinePage = ({ pageContext, location }) => {
	return (
		<Layout location={location}>
			<Seo title="Timeline" />
			<Header />
			<PageHeader
				pageContext={pageContext}
				location={location}
				title="Timeline"
			/>
			<main className="site-wrapper-reveal">
				<TimelineArea />
				<Cta />
			</main>
			<Footer />
		</Layout>
	)
}

export default TimelinePage
