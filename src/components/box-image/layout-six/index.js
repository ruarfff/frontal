import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Button from "@ui/button";
import {
	BoxImgWrapper,
	BoxImgInner,
	BoxImgMediaWrap,
	DefaultImage,
	BoxImgContent,
	HeadingWrap,
	TextWrap,
	BoxImgBtnWrap
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
						<DefaultImage>
							{boxImage}
						</DefaultImage>
					</BoxImgMediaWrap>
				)}
				<BoxImgContent>
					{title && <HeadingWrap as="h5" {...headingStyle}>{title}</HeadingWrap>}
					{desc && <TextWrap {...descStyle}>{desc}</TextWrap>}
					<BoxImgBtnWrap>
						<Button
							className="button"
							to={path}
							icon="far fa-long-arrow-right"
							iconposition="right"
							icondistance="4px"
							varient="texted">Discover Now</Button>
					</BoxImgBtnWrap>
				</BoxImgContent>
			</BoxImgInner>
		</BoxImgWrapper>
	)
}

BoxImage.propTypes = {
	path: PropTypes.string,
	imageSrc: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	title: PropTypes.string,
	subtitle: PropTypes.string
}

BoxImage.defaultProps = {
	path: "/"
}


export default BoxImage;