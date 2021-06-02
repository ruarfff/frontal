import React, { Fragment, useState } from 'react'
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Anchor from "@ui/anchor";
import Button from "@ui/button";
import Text from "@ui/text";
import ModalVideo from "@ui/modal-video";
import BlogMeta from "../blog-meta";
import VideoThumb from "../video-thumb";
import { BlogWrapper, BlogMedia, BlogThumb, BlogInfo, BlogHeader, BlogTitle, BlogExcerpt, ReadMoreBtn, BlogQuote } from './blog.style'

const Blog = ({ content, ...restProps }) => {
	const {
		frontmatter: { title, date, format, featured_image, quote_text, quote_author, video_link },
		excerpt,
		fields: { slug, dateSlug } } = content;
	const { wrapStyle, metaStyle, buttonStyle } = restProps;
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
			<BlogWrapper {...wrapStyle}>
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
						{date && (
							<BlogMeta
								{...metaStyle}
								path={`/date/${dateSlug}`}
								text={date}
								icon="far fa-calendar-alt"
							/>
						)}
						{title && <BlogTitle><Anchor path={`/${slug}`}>{title}</Anchor></BlogTitle>}
					</BlogHeader>
					{excerpt && (
						<BlogExcerpt>
							<Text>{excerpt}</Text>
						</BlogExcerpt>
					)}
					<ReadMoreBtn>
						<Button icon="far fa-long-arrow-right" to={`/${slug}`} {...buttonStyle}>Read More</Button>
					</ReadMoreBtn>
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
	title: PropTypes.string,
	path: PropTypes.string,
	date: PropTypes.string,
	imageSrc: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	excerpt: PropTypes.string,
	format: PropTypes.string
}

Blog.defaultProps = {
	metaStyle: {
		mb: '7px'
	},
	buttonStyle: {
		varient: "texted",
		fontWeight: 500,
		fontSize: '14px',
		pb: '4px',
		hover: "false",
		icondistance: "4px",
		iconsize: "16px",
		border: {
			bottom: {
				width: '1px'
			}
		}
	}
}

export default Blog;