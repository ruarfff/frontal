import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
	BoxImgWrapper,
	BoxImgInner,
	BoxImgMediaWrap,
	DefaultImage,
	BoxImgContent,
	HeadingWrap,
	TextWrap
} from './box-image.style'


const BoxImage = ({ imageSrc, title, desc, ...boxStyles }) => {
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
						<DefaultImage>
							{boxImage}
						</DefaultImage>
					</BoxImgMediaWrap>
				)}
				<BoxImgContent>
					{title && <HeadingWrap as="h6" {...headingStyle}>{title}</HeadingWrap>}
					{desc && <TextWrap {...descStyle}>{desc}</TextWrap>}
				</BoxImgContent>
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
	subtitle: PropTypes.string
}



export default BoxImage;