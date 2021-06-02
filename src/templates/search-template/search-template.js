import Blog from "@components/blog/layout-two";
import PageHeader from "@components/pageheader";
import Seo from "@components/seo";
import Sidebar from "@containers/blog/sidebar";
import Cta from "@containers/global/cta-area/section-one";
import Layout from "@layout";
import Footer from "@layout/footer/footer-one";
import Heading from "@ui/heading";
import { Col, Container, Row } from "@ui/wrapper";
import { graphql } from "gatsby";
import Header from "@layout/header";
import PropTypes from "prop-types";
import React from "react";
import { BlogBox, BlogBoxWrapper, BlogListWrapper, SearchError, SearchInfoHeader } from './search-template.style';

const SearchTemplate = ({ data, pageContext, location, ...restProps }) => {
	const { headingStyle } = restProps;
	const blogs = data.allMarkdownRemark.edges || [];
	const { state } = location;
	const query = state && state.query
	let filteredBlogs = [];
	if (state) {
		filteredBlogs = blogs.filter(post => {
			const { title, quote_text, quote_author, categories, tags, author: { name: authorName } } = post.node.frontmatter
			const { html } = post.node

			return (
				(title && title.toLowerCase().includes(query)) ||
				(quote_text && quote_text.toLowerCase().includes(query)) ||
				(quote_author && quote_author.toLowerCase().includes(query)) ||
				(html && html.toLowerCase().includes(query)) ||
				(authorName && authorName.toLowerCase().includes(query)) ||
				(tags &&
					tags
						.join("")
						.toLowerCase()
						.includes(query.toLowerCase())) ||
				(categories &&
					categories
						.join("")
						.toLowerCase()
						.includes(query.toLowerCase()))
			)
		});
	}

	return (
		<Layout location={location}>
			<Seo title={`Search`} />
			<Header />
			<PageHeader
				pageContext={pageContext}
				location={location}
				title={`Search`}
			/>
			<main className="site-wrapper-reveal">
				<BlogListWrapper>
					<Container>
						<Row>
							<Col lg={{ span: 4, order: 1 }} xs={{ span: 12, order: 2 }}>
								<Sidebar />
							</Col>
							<Col lg={{ span: 8, order: 2 }} xs={{ span: 12, order: 1 }}>
								{filteredBlogs && (
									<SearchInfoHeader>
										<Heading {...headingStyle}>Search for: <span>{query}</span></Heading>
										<Heading as="h5">Posts Found: {filteredBlogs.length}</Heading>
									</SearchInfoHeader>
								)}
								{filteredBlogs.length > 0 && (
									<BlogBoxWrapper>
										{filteredBlogs.map(blog => (
											<BlogBox key={blog.node.fields.slug}>
												<Blog content={blog.node} />
											</BlogBox>
										))}
									</BlogBoxWrapper>
								)}
								{filteredBlogs.length === 0 && (
									<SearchError>
										<h2>Nothing Found</h2>
									</SearchError>
								)}
							</Col>
						</Row>
					</Container>
				</BlogListWrapper>
				<Cta />
			</main>
			<Footer />
		</Layout>
	)
}

export const query = graphql`
    query BlogBySearchQuery{
        allMarkdownRemark(
            sort: {fields: frontmatter___date, order: DESC}
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
                        authorId
                        dateSlug
                    }
                    excerpt
                    html
                }
            }
        }
    }
`;


SearchTemplate.propTypes = {
	headingStyle: PropTypes.object
}

SearchTemplate.defaultProps = {
	headingStyle: {
		as: 'h3',
		child: {
			color: 'primary'
		}
	}
}
export default SearchTemplate;
