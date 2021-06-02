import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import FeaturedBlog from "@components/blog/layout-three";
import RecentBlog from "@components/blog/layout-four";
import { BlogWrap, BlogList, BlogListItem } from './blog-area.style'

const BlogArea = (props) => {
	const BlogData = useStaticQuery(graphql`
        query ServicesBlogQuery {
            section: indexServicesJson(id: {eq: "services-blog-contnet"}) {
                title
                subtitle
            }
            featureBlog: allMarkdownRemark(filter: {frontmatter: {is_featured: {eq: true}}}, limit: 1) {
                edges {
                    node {
                        fields {
                            slug
                            dateSlug
                        }
                        frontmatter {
                            title
                            date(formatString: "LL")
                            format
                            featured_image {
                                childImageSharp {
									gatsbyImageData(
										layout: CONSTRAINED
										width: 690
										height: 422
										placeholder: TRACED_SVG
										formats: WEBP
										quality: 100
									)
                                }
                            }
                            author {
                                name
                                fields {
                                    authorId
                                }
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
                        }
                        excerpt
                    }
                }
            }
            recentBlogs: allMarkdownRemark(filter: {frontmatter: {is_featured: {ne: true}, format: {eq: "image"}}}, limit: 3) {
                edges {
                    node {
                        fields {
                            dateSlug
                            slug
                        }
                        frontmatter {
                            title
                            date(formatString: "LL")
                            format
                            author {
                                name
                                fields {
                                    authorId
                                }
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
                            featured_image {
                                childImageSharp {
									gatsbyImageData(
										layout: CONSTRAINED
										width: 528
										height: 343
										placeholder: TRACED_SVG
										formats: WEBP
										quality: 100
									)
                                }
                            }
                        }
                    }
                }
            }
        }      
    `)
	const { title, subtitle } = BlogData.section;
	const featureBlogs = BlogData.featureBlog.edges;
	const recentBlogs = BlogData.recentBlogs.edges;
	const { sectionTitleStyle } = props;
	return (
		<BlogWrap>
			<Container>
				<Row>
					<Col lg={12}>
						<SectionTitle
							{...sectionTitleStyle}
							title={title}
							subtitle={subtitle}
						/>
					</Col>
				</Row>
				<Row>
					<Col lg={6}>
						{featureBlogs && featureBlogs.map(featureBlog => (
							<FeaturedBlog
								key={featureBlog.node.fields.slug}
								format={featureBlog.node.frontmatter.format}
								title={featureBlog.node.frontmatter.title}
								slug={featureBlog.node.fields.slug}
								date={featureBlog.node.frontmatter.date}
								dateSlug={featureBlog.node.fields.dateSlug}
								author={featureBlog.node.frontmatter.author}
								featured_image={featureBlog.node.frontmatter.featured_image}
								excerpt={featureBlog.node.excerpt}
							/>
						))}
					</Col>
					<Col lg={6}>
						<BlogList>
							{recentBlogs && recentBlogs.map(recentBlog => (
								<BlogListItem key={recentBlog.node.fields.slug}>
									<RecentBlog
										format={recentBlog.node.frontmatter.format}
										title={recentBlog.node.frontmatter.title}
										slug={recentBlog.node.fields.slug}
										date={recentBlog.node.frontmatter.date}
										dateSlug={recentBlog.node.fields.dateSlug}
										author={recentBlog.node.frontmatter.author}
										featured_image={recentBlog.node.frontmatter.featured_image}
									/>
								</BlogListItem>
							))}
						</BlogList>
					</Col>
				</Row>
			</Container>
		</BlogWrap>
	)
}

BlogArea.defaultProps = {
	sectionTitleStyle: {
		mb: '60px',
		responsive: {
			small: {
				mb: '47px'
			}
		}
	}
}

export default BlogArea
