import PageHeader from "@components/pageheader";
import Seo from "@components/seo";
import ContactFormArea from '@containers/contact-us/contact-form-area';
import ContactInfoArea from '@containers/contact-us/contact-info-area';
import CTAArea from "@containers/global/cta-area/section-one";
import Layout from "@layout";
import Footer from "@layout/footer/footer-one";
import Header from '@layout/header';
import * as React from "react";

const ContactUsPage = ({ pageContext, location }) => (
	<Layout location={location}>
		<Seo title="Contact Us" />
		<Header />
		<PageHeader
			pageContext={pageContext}
			location={location}
			title="Contact Us"
		/>
		<main className="site-wrapper-reveal">
			<ContactFormArea />
			<ContactInfoArea />
			<CTAArea />
		</main>
		<Footer />
	</Layout>
)

export default ContactUsPage
