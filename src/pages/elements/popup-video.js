import PageHeader from "@components/pageheader";
import Seo from "@components/seo";
import PopupArea from '@containers/elements/popup-video';
import Cta from "@containers/global/cta-area/section-one";
import Layout from "@layout";
import Footer from "@layout/footer/footer-one";
import Header from '@layout/header';
import * as React from "react";

const PopupVideoPage = ({ pageContext, location }) => {
	return (
		<Layout location={location}>
			<Seo title="Popup Video" />
			<Header />
			<PageHeader
				pageContext={pageContext}
				location={location}
				title="Popup Video"
			/>
			<main className="site-wrapper-reveal">
				<PopupArea />
				<Cta />
			</main>
			<Footer />
		</Layout>
	)
}

export default PopupVideoPage
