import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { DiscussionEmbed } from 'disqus-react';
import { CommentWrap, SectionTItle } from './comment.style'

const Comment = ({ url, id, title }) => {
	const getUrl = useStaticQuery(graphql`
        query CommentSiteUrlQuery {
            site {
                siteMetadata {
                    siteUrl
                }
            }
        }      
    `)
	const basUrl = getUrl.site.siteMetadata.siteUrl;
	const disqusShortname = 'mitech-1';
	const disqusConfig = {
		url: basUrl + url,
		identifier: id,
		title: title,
	};
	return (
		<CommentWrap>
			<SectionTItle>
				<h3>Leave your thought here</h3>
				<p>Your email address will not be published. Required fields are marked *</p>
			</SectionTItle>
			<DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
		</CommentWrap>
	)
}

export default Comment;