import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Anchor from "@ui/anchor";

const BlogAd = (props) => {
	const BlogAdQuery = useStaticQuery(graphql`
        query BlogSidebarAdQuery {
            advertismentsJson(id: {eq: "blog-sidebar-ad-1"}) {
                title
                path
                image {
                    childImageSharp {
						gatsbyImageData(
							layout: CONSTRAINED
							width: 680
							height: 940
							placeholder: TRACED_SVG
							formats: WEBP
							quality: 100
						)
                    }
                }
            }
        }
    `)
	const adData = BlogAdQuery.advertismentsJson;
	return (
		<Anchor path={adData.path} display="block">
			<GatsbyImage image={getImage(adData.image)} alt={adData.title} />
		</Anchor>
	)
}

export default BlogAd;