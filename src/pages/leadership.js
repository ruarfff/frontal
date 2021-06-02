import PageHeader from "@components/pageheader";
import Seo from "@components/seo";
import ContactArea from '@containers/global/contact-area/contact-one';
import TeamArea from '@containers/leadership/team-area';
import TeamListArea from '@containers/leadership/team-list-area';
import Layout from "@layout";
import Footer from "@layout/footer/footer-one";
import Header from '@layout/header';
import * as React from "react";

const LeadershipPage = ({ pageContext, location }) => (
	<Layout location={location}>
		<Seo title="Leadership" />
		<Header />
		<PageHeader
			pageContext={pageContext}
			location={location}
			title="Leadership"
		/>
		<main className="site-wrapper-reveal">
			<TeamArea />
			<TeamListArea />
			<ContactArea />
		</main>
		<Footer />
	</Layout>
)

export default LeadershipPage
