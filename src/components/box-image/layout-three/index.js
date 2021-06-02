import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { truncateString } from "@utils/utilFunctions";
import {
	BoxImgWrapper,
	BoxImgInner,
	BoxImgMedia,
	BoxImgContent,
	HeadingWrap,
	TextWrap,
	BoxImgLink
} from './box-image.style'

const BoxImage = ({ imageSrc, title, desc, path, ...boxStyles }) => {
	const { headingStyle, descStyle, ...restStyle } = boxStyles;
	let boxImage;
	if (typeof imageSrc === 'object') {
		boxImage = <GatsbyImage image={getImage(imageSrc)} alt={title} />;
	} else {
		boxImage = <img src={imageSrc} alt={title} />
	}
	return (
		<BoxImgWrapper {...restStyle}>
			<BoxImgInner>
				{imageSrc && (
					<BoxImgMedia>
						{boxImage}
					</BoxImgMedia>
				)}
				<BoxImgContent>
					{title && <HeadingWrap as='h5' {...headingStyle}>{title}</HeadingWrap>}
					{desc && <TextWrap {...descStyle}>{truncateString(desc, 80)}</TextWrap>}
				</BoxImgContent>
				<BoxImgLink to={path}>{title}</BoxImgLink>
			</BoxImgInner>
		</BoxImgWrapper>
	)
}

BoxImage.propTypes = {
	content: PropTypes.object,
	imageSrc: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	title: PropTypes.string
}

BoxImage.defaultProps = {
	path: "/"
}


export default BoxImage;