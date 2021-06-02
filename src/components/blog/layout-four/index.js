import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Anchor from "@ui/anchor";
import { truncateString } from "@utils/utilFunctions";
import AuthorMeta from "../author-meta";
import BlogMeta from "../blog-meta";
import {
	BlogWrapper,
	BlogMedia,
	BlogThumb,
	BlogThumbMeta,
	BlogInfo,
	BlogHeaderMeta,
	BlogTitle
} from './blog.style'

const Blog = ({ format, title, slug, date, dateSlug, author, featured_image, ...restProps }) => {
	const { authorMetaStyle } = restProps;
	return (
		<BlogWrapper>
			<BlogMedia>
				{format === 'image' && (
					<BlogThumb>
						<Anchor path={`/${slug}`}>
							<GatsbyImage image={getImage(featured_image)} alt={title} />
						</Anchor>
					</BlogThumb>
				)}
				{author && (
					<BlogThumbMeta>
						<AuthorMeta
							{...authorMetaStyle}
							slug={author.fields.authorId}
							name={author.name}
							imageSrc={author.image}
						/>
					</BlogThumbMeta>
				)}
			</BlogMedia>
			<BlogInfo>
				{date && (
					<BlogHeaderMeta>
						<BlogMeta
							path={`/date/${dateSlug}`}
							text={date}
							icon="far fa-calendar"
						/>
					</BlogHeaderMeta>
				)}
				{title && <BlogTitle><Anchor path={`/${slug}`}>{truncateString(title, 33)}</Anchor></BlogTitle>}
			</BlogInfo>
		</BlogWrapper>
	)
}

Blog.defaultProps = {
	authorMetaStyle: {
		color: '#fff'
	}
}

export default Blog
