import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Anchor from "@ui/anchor";
import Text from "@ui/text";
import { AuthorMetaWrap } from './author-meta.style'

const AuthorMeta = ({ slug, name, imageSrc, ...restProps }) => {
	let authorImage;
	if (typeof imageSrc === 'object') {
		authorImage = <GatsbyImage image={getImage(imageSrc)} alt={name} />;
	} else {
		authorImage = <img src={imageSrc} alt={name} />
	}

	return (
		<AuthorMetaWrap {...restProps}>
			<Anchor path={`/profile/${slug}`}>
				{authorImage}
				<Text as="span">{name}</Text>
			</Anchor>
		</AuthorMetaWrap>
	)
}

AuthorMeta.propTypes = {
	slug: PropTypes.string,
	name: PropTypes.string,
	image: PropTypes.object,
	ml: PropTypes.string,
	mr: PropTypes.string
}

export default AuthorMeta;