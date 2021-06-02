import Blog from "@components/blog/layout-two";
import PageHeader from "@components/pageheader";
import Seo from "@components/seo";
import Sidebar from "@containers/blog/sidebar";
import Cta from "@containers/global/cta-area/section-one";
import Layout from "@layout";
import Footer from "@layout/footer/footer-one";
import Header from '@layout/header';
import Heading from "@ui/heading";
import { Col, Container, Row } from "@ui/wrapper";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import * as React from "react";
import { AuthorWrapper, BlogBox, BlogBoxWrapper } from './author-template.style';


const AuthorTemplate = ({ data, pageContext, location, ...restProps }) => {
	const { headingStyle } = restProps;
	const blogs = data.allMarkdownRemark.edges;
	const author = data.authorsJson.name;
	return (
		<Layout location={location}>
			<Seo title={`Author: ${author}`} />
			<Header />
			<PageHeader
				pageContext={pageContext}
				location={location}
				title={`Author: ${author}`}
			/>
			<main className="site-wrapper-reveal">
				<AuthorWrapper>
					<Container>
						<Row>
							<Col lg={{ span: 4, order: 1 }} xs={{ span: 12, order: 2 }}>
								<Sidebar />
							</Col>
							<Col lg={{ span: 8, order: 2 }} xs={{ span: 12, order: 1 }}>
								<Heading {...headingStyle}>Interesting articles <span>updated daily</span></Heading>
								<BlogBoxWrapper>
									{blogs.map(blog => (
										<BlogBox key={blog.node.fields.slug}>
											<Blog content={blog.node} />
										</BlogBox>
									))}
								</BlogBoxWrapper>
							</Col>
						</Row>
					</Container>
				</AuthorWrapper>
				<Cta />
			</main>
			<Footer />
		</Layout>
	)
}

export const query = graphql`
    query BlogByAuthorQuery($author: String!){
        allMarkdownRemark(
            sort: {fields: frontmatter___date, order: DESC},
            filter: {fields: {authorId: {eq: $author}}}
        ) {
            edges {
                node {
                    frontmatter {
                        categories
                        title
                        author {
                            name
                            image {
                                childImageSharp {
									gatsbyImageData(
										layout: FIXED
										width: 32
										height: 32
										placeholder: TRACED_SVG
										formats: WEBP
										quality: 100
									)
                                }
                            }
                        }
                        format
                        quote_text
                        quote_author
                        video_link
                        date(formatString: "LL")
                        featured_image {
                            childImageSharp {
								gatsbyImageData(
									layout: CONSTRAINED
									width: 770
									height: 420
									placeholder: TRACED_SVG
									formats: WEBP
									quality: 100
								)
                            }
                        }
                    }
                    fields {
                        slug
                        dateSlug
                        authorId
                    }
                    excerpt
                }
            }
        }
        authorsJson(fields: {authorId: {eq: $author}}){
            name
        }
    }
`;


AuthorTemplate.propTypes = {
	headingStyle: PropTypes.object
}

AuthorTemplate.defaultProps = {
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

export default AuthorTemplate;
