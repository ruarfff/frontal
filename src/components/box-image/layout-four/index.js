import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
	BoxImgWrapper,
	BoxImgInner,
	BoxImgMediaWrap,
	BoxImgContent,
	HeadingWrap,
	TextWrap,
	BoxImgLink
} from './box-image.style'

const BoxImage = ({ imageSrc, title, desc, path, ...boxStyles }) => {
	const { headingStyle, descStyle } = boxStyles;
	let boxImage;
	if (typeof imageSrc === 'object') {
		boxImage = <GatsbyImage image={getImage(imageSrc)} alt={title} />;
	} else {
		boxImage = <img src={imageSrc} alt={title} />
	}
	return (
		<BoxImgWrapper {...boxStyles}>
			<BoxImgInner>
				{imageSrc && (
					<BoxImgMediaWrap>
						{boxImage}
					</BoxImgMediaWrap>
				)}
				<BoxImgContent>
					{title && <HeadingWrap as="h5" {...headingStyle}>{title}</HeadingWrap>}
					{desc && <TextWrap {...descStyle}>{desc}</TextWrap>}
				</BoxImgContent>
				<BoxImgLink to={path}>{title}</BoxImgLink>
			</BoxImgInner>
		</BoxImgWrapper>
	)
}

BoxImage.propTypes = {
	imageSrc: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	title: PropTypes.string,
	headingStyle: PropTypes.object,
	descStyle: PropTypes.object
}

BoxImage.defaultProps = {
	path: "/"
}


export default BoxImage;