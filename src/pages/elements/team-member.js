import PageHeader from "@components/pageheader";
import Seo from "@components/seo";
import SectionOne from '@containers/elements/team-member/section-one';
import SectionTwo from '@containers/elements/team-member/section-two';
import Cta from "@containers/global/cta-area/section-one";
import Layout from "@layout";
import Footer from "@layout/footer/footer-one";
import Header from '@layout/header';
import * as React from "react";

const TeamPage = ({ pageContext, location }) => {
	return (
		<Layout location={location}>
			<Seo title="Team Member" />
			<Header />
			<PageHeader
				pageContext={pageContext}
				location={location}
				title="Team Member"
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

export default TeamPage
