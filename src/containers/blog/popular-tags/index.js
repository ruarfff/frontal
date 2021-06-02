import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Box } from "@ui/wrapper";
import Button from "@ui/button";
import { slugify, flatDeep } from "@utils/utilFunctions";

const PopularTags = ({ boxStyle, tagStyle }) => {
	const BlogTagsQuery = useStaticQuery(graphql`
        query BlogSidebarTagsQuery {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            tags
                        }
                    }
                }
            }
        }
    `)
	const tags = BlogTagsQuery.allMarkdownRemark.edges;
	let tagObjList = tags.map(tag => tag.node.frontmatter);
	let tagListArr = tagObjList.map((tag, i) => tag.tags);
	let tagList = flatDeep(tagListArr)
	let tagListSet = new Set(tagList);
	let tagArr = Array.from(tagListSet);

	return (
		<Box {...boxStyle}>
			{tagArr.map((tag, i) => {
				return <Button {...tagStyle} to={`/tag/${slugify(tag)}`} key={slugify(tag)}>{tag}</Button>
			})}
		</Box>
	)
}

PopularTags.propTypes = {
	tagStyle: PropTypes.object
}

PopularTags.defaultProps = {
	boxStyle: {
		m: "-5px"
	},
	tagStyle: {
		hover: "2",
		size: 'xsmall',
		skin: "light",
		color: "#ababab",
		bgcolor: "#f5f5f5",
		p: '0 14px',
		m: '5px',
		height: '32px',
		lineheight: '32px',
		fontSize: '13px'
	}
}

export default PopularTags;