import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BoxImgWrapper, BoxImgInner, BoxImgMedia, BoxImgContent, HeadingWrap, BoxImgLink } from './box-image.style'

const BoxImage = ({ imageSrc, title, headingStyle, path, ...boxStyles }) => {
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
					<BoxImgMedia>
						{boxImage}
					</BoxImgMedia>
				)}
				<BoxImgContent>
					{title && <HeadingWrap as="h6" {...headingStyle}>{title}</HeadingWrap>}
				</BoxImgContent>
				<BoxImgLink to={path}>{title}</BoxImgLink>
			</BoxImgInner>
		</BoxImgWrapper>
	)
}

BoxImage.propTypes = {
	boxCSS: PropTypes.object,
	imageSrc: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	title: PropTypes.string,
	path: PropTypes.string
}

BoxImage.defaultProps = {
	path: "/"
}

export default BoxImage;