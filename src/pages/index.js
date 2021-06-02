import Seo from "@components/seo";
import ContactArea from '@containers/global/contact-area/contact-four';
import CtaArea from "@containers/global/cta-area/section-one";
import AboutArea from '@containers/index-services/about-area';
import BlogArea from '@containers/index-services/blog-area';
import FeaturesArea from '@containers/index-services/features-area';
import GradationArea from '@containers/index-services/gradation-area';
import HeroArea from '@containers/index-services/hero-area';
import ServicesArea from '@containers/index-services/services-area';
import Layout from "@layout";
import Footer from "@layout/footer/footer-one";
import Header from "@layout/header";
import * as React from "react";

const IndexServices = ({ location }) => (
	<Layout location={location}>
		<Seo title="Services" />
		<Header />
		<main className="site-wrapper-reveal">
			<HeroArea />
			<FeaturesArea />
			<AboutArea />
			<ServicesArea />
			<GradationArea />
			<CtaArea />
			<BlogArea />
			<ContactArea />
		</main>
		<Footer />
	</Layout>
)

export default IndexServices
