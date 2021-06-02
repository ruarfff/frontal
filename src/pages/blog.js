import PageHeader from "@components/pageheader";
import Seo from "@components/seo";
import BlogArea from '@containers/blog/blog-area';
import Sidebar from "@containers/blog/sidebar";
import Cta from "@containers/global/cta-area/section-one";
import Layout from "@layout";
import Footer from "@layout/footer/footer-one";
import Heading from "@ui/heading";
import Section, { Col, Row } from "@ui/wrapper";
import Header from '@layout/header';
import PropTypes from "prop-types";
import * as React from "react";

const BlogListLargeImage = ({ pageContext, location, ...restProps }) => {
	const { sectionStyle, headingStyle } = restProps;
	return (
		<Layout location={location}>
			<Seo title="Blogs" />
			<Header />
			<PageHeader
				pageContext={pageContext}
				location={location}
				title="Blog Update"
			/>
			<main className="site-wrapper-reveal">
				<Section {...sectionStyle}>
					<Row>
						<Col lg={{ span: 4, order: 1 }} xs={{ span: 12, order: 2 }}>
							<Sidebar />
						</Col>
						<Col lg={{ span: 8, order: 2 }} xs={{ span: 12, order: 1 }}>
							<Heading {...headingStyle}>Interesting articles <span>updated daily</span></Heading>
							<BlogArea />
						</Col>
					</Row>
				</Section>
				<Cta />
			</main>
			<Footer />
		</Layout>
	)
}


BlogListLargeImage.propTypes = {
	sectionStyle: PropTypes.object
}

BlogListLargeImage.defaultProps = {
	sectionStyle: {
		pt: '89px',
		pb: '100px',
		responsive: {
			medium: {
				pt: '72px',
				pb: '80px'
			},
			small: {
				pt: '53px',
				pb: '60px'
			}
		}
	},
	headingStyle: {
		as: 'h3',
		mb: '70px',
		textalign: 'center',
		child: {
			color: 'primary'
		},
		responsive: {
			medium: {
				mb: '50px'
			}
		}
	}
}

export default BlogListLargeImage;
