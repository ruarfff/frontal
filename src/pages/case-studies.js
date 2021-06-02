import PageHeader from "@components/pageheader";
import Seo from "@components/seo";
import CaseStudyArea from '@containers/global/case-study-area';
import CTAArea from "@containers/global/cta-area/section-one";
import Layout from "@layout";
import Footer from "@layout/footer/footer-one";
import Header from '@layout/header';
import * as React from "react";

const CaseStudiesPage = ({ pageContext, location }) => (
	<Layout location={location}>
		<Seo title="Case Studies" />
		<Header />
		<PageHeader
			pageContext={pageContext}
			location={location}
			title="Case Studies"
		/>
		<main className="site-wrapper-reveal">
			<CaseStudyArea />
			<CTAArea />
		</main>
		<Footer />
	</Layout>
)

export default CaseStudiesPage
