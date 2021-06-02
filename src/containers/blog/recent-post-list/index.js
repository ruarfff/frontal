import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { List, ListItem, ListLink } from './recent-post-list.style'

const RecentPostList = ({ listStyle }) => {
	const blogData = useStaticQuery(graphql`
        query RecentBlogQueryData{
            allMarkdownRemark(filter: {frontmatter: {is_featured: {eq: false}}}, limit: 5, sort: {fields: frontmatter___date, order: ASC}) {
                edges {
                  node {
                    fields{
                        slug
                    }
                    frontmatter {
                      title
                    }
                  }
                }
            }
        }
    `)
	const latestBlogs = blogData.allMarkdownRemark.edges;
	return (
		<List>
			{latestBlogs && latestBlogs.map((latestBlog, i) => (
				<ListItem key={`${latestBlog.node.fields.slug}-${i}`}>
					<ListLink path={`/${latestBlog.node.fields.slug}`}>
						<i className="icon icon-1 far fa-long-arrow-right"></i>
						<i className="icon icon-2 far fa-long-arrow-right"></i>
						<span>{latestBlog.node.frontmatter.title}</span>
					</ListLink>
				</ListItem>
			))}
		</List>
	)
}

export default RecentPostList;