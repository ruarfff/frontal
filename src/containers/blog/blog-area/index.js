import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Blog from "@components/blog/layout-two";
import Pagination from "@components/blog/pagination";
import { BlogWrapper, BlogBox } from './blog-area.style'

const BlogArea = ({ blogBoxStyle }) => {
	const BlogQuery = useStaticQuery(graphql`
        query ListImageBlogQuery {
            allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, limit: 6) {
                totalCount
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
                    }
                }
            }
        }      
    `)
	const blogs = BlogQuery.allMarkdownRemark.edges;
	const { totalCount } = BlogQuery.allMarkdownRemark;
	const postsPerPage = 6;
	const numberOfPages = Math.ceil(totalCount / postsPerPage);
	return (
		<Fragment>
			<BlogWrapper>
				{blogs.map(blog => (
					<BlogBox key={blog.node.fields.slug}>
						<Blog content={blog.node} />
					</BlogBox>
				))}
			</BlogWrapper>
			<Pagination
				rootPage="/blog"
				currentPage={1}
				numberOfPages={numberOfPages}
			/>
		</Fragment>
	)
}


export default BlogArea;