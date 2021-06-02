import React, { Fragment, useState } from 'react'
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Button from "@ui/button";
import Text from "@ui/text";
import Anchor from "@ui/anchor";
import ModalVideo from "@ui/modal-video";
import SocialShare from "../social-share";
import AuthorMeta from "../author-meta";
import BlogMeta from "../blog-meta";
import Categories from "../categories";
import VideoThumb from "../video-thumb";

import {
	BlogWrapper,
	BlogMedia,
	BlogThumb,
	BlogQuote,
	BlogInfo,
	BlogHeader,
	BlogTitle,
	BlogHeaderMeta,
	BlogExcerpt,
	BlogFooter,
	BlogFooterLeft,
	BlogFooterRight
} from './blog.style'

const Blog = ({ content, ...restProps }) => {
	const {
		frontmatter: { title, author, date, format, featured_image, quote_text, quote_author, video_link, categories },
		excerpt,
		fields: { slug, authorId, dateSlug } } = content;
	const { metaStyle, categoryBoxStyle } = restProps;
	let video_arr, video_id, video_channel;
	if (video_link) {
		video_arr = video_link.split('=', -1);
		video_id = video_arr[1];
		video_channel = video_link.split(".")[1];
	}
	const [videoOpen, setVideoOpen] = useState(false);
	const modalVideoOpen = () => {
		setVideoOpen(true)
	}
	const modalVideoClose = () => {
		setVideoOpen(false)
	}

	return (
		<Fragment>
			<BlogWrapper {...restProps}>
				<BlogMedia>
					{format === 'image' && (
						<BlogThumb>
							<Anchor path={`/${slug}`}>
								<GatsbyImage image={getImage(featured_image)} alt={title} />
							</Anchor>
						</BlogThumb>
					)}
					{format === 'quote' && (
						<BlogQuote>
							{quote_text && <h3>{quote_text}</h3>}
							{quote_author && <footer>-{quote_author}</footer>}
						</BlogQuote>
					)}
					{format === 'video' && (
						<VideoThumb
							onClick={modalVideoOpen}
							poster={featured_image}
							title={title}
						/>
					)}
				</BlogMedia>
				<BlogInfo>
					<BlogHeader>
						<Categories {...categoryBoxStyle} categories={categories} />
						{title && <BlogTitle><Anchor path={`/${slug}`}>{title}</Anchor></BlogTitle>}
						<BlogHeaderMeta>
							{author && (
								<AuthorMeta
									{...metaStyle}
									slug={authorId}
									name={author.name}
									imageSrc={author.image}
								/>
							)}
							{date && (
								<BlogMeta
									{...metaStyle}
									path={`/date/${dateSlug}`}
									text={date}
									icon="fa fa-calendar-alt"
								/>
							)}
						</BlogHeaderMeta>
					</BlogHeader>
					{excerpt && (
						<BlogExcerpt>
							<Text>{excerpt}</Text>
						</BlogExcerpt>
					)}
					<BlogFooter>
						<BlogFooterLeft>
							<Button to={`/${slug}`} hover="2">Read More</Button>
						</BlogFooterLeft>
						<BlogFooterRight>
							<SocialShare />
						</BlogFooterRight>
					</BlogFooter>
				</BlogInfo>
			</BlogWrapper>
			<ModalVideo
				channel={video_channel}
				videoId={video_id}
				isOpen={videoOpen}
				onClose={modalVideoClose}
			/>
		</Fragment>
	)
}

Blog.propTypes = {
	content: PropTypes.shape({
		frontmatter: PropTypes.shape({
			title: PropTypes.string,
			author: PropTypes.shape({
				name: PropTypes.string,
				image: PropTypes.object
			}),
			date: PropTypes.string,
			format: PropTypes.string,
			featured_image: PropTypes.oneOfType([
				PropTypes.string,
				PropTypes.object
			]),
			quote_text: PropTypes.string,
			quote_author: PropTypes.string,
			categories: PropTypes.array
		}),
		excerpt: PropTypes.string,
		fields: PropTypes.shape({
			slug: PropTypes.string,
			authorId: PropTypes.string
		})
	}),
	metaStyle: PropTypes.shape({
		mt: PropTypes.string,
		mr: PropTypes.string
	}),
	categoryBoxStyle: PropTypes.shape({
		mb: PropTypes.string
	})
}

Blog.defaultProps = {
	metaStyle: {
		mt: '10px',
		mr: '20px'
	},
	categoryBoxStyle: {
		mb: '18px'
	}
}

export default Blog;