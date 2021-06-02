import PageHeader from "@components/pageheader";
import Seo from "@components/seo";
import SectionFive from '@containers/elements/box-image/section-five';
import SectionFour from '@containers/elements/box-image/section-four';
import SectionOne from '@containers/elements/box-image/section-one';
import SectionSeven from '@containers/elements/box-image/section-seven';
import SectionSix from '@containers/elements/box-image/section-six';
import SectionThree from '@containers/elements/box-image/section-three';
import SectionTwo from '@containers/elements/box-image/section-two';
import Cta from "@containers/global/cta-area/section-one";
import Layout from "@layout";
import Footer from "@layout/footer/footer-one";
import Header from '@layout/header';
import * as React from "react";

const ButtonPage = ({ pageContext, location }) => {
	return (
		<Layout location={location}>
			<Seo title="Box Image" />
			<Header />
			<PageHeader
				pageContext={pageContext}
				location={location}
				title="Box Image"
			/>
			<main className="site-wrapper-reveal">
				<SectionOne />
				<SectionTwo />
				<SectionThree />
				<SectionFour />
				<SectionFive />
				<SectionSix />
				<SectionSeven />
				<Cta />
			</main>
			<Footer />
		</Layout>
	)
}

export default ButtonPage
