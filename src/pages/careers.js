import PageHeader from "@components/pageheader";
import Seo from "@components/seo";
import GalleryArea from '@containers/careers/gallery-area';
import JobsArea from '@containers/careers/jobs-area';
import ContactArea from '@containers/global/contact-area/contact-one';
import Layout from "@layout";
import Footer from "@layout/footer/footer-one";
import Header from '@layout/header';
import * as React from "react";

const CareersPage = ({ pageContext, location }) => (
	<Layout location={location}>
		<Seo title="Careers" />
		<Header />
		<PageHeader
			pageContext={pageContext}
			location={location}
			title="Careers"
		/>
		<main className="site-wrapper-reveal">
			<JobsArea />
			<GalleryArea />
			<ContactArea />
		</main>
		<Footer />
	</Layout>
)

export default CareersPage
