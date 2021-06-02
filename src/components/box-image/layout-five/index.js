import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Button from "@ui/button";
import {
	BoxImgWrapper,
	BoxImgInner,
	BoxImgMedia,
	DefaultImage,
	HoverImage,
	BoxImgContent,
	HeadingWrap,
	TextWrap
} from './box-image.style'


const BoxImage = ({ imageSrc, hoverImg, title, desc, path, ...boxStyles }) => {
	const { boxStyle, headingStyle, descStyle } = boxStyles;
	let boxImage;
	let hoverImage;

	if (typeof imageSrc === "object") {
		boxImage = <GatsbyImage image={getImage(imageSrc)} alt={title} />;
	} else {
		boxImage = <img src={imageSrc} alt={title} />
	}

	if (typeof hoverImg === "object") {
		hoverImage = <GatsbyImage image={getImage(hoverImg)} alt={title} />;
	} else {
		hoverImage = <img src={hoverImg} alt={title} />
	}

	return (
		<BoxImgWrapper {...boxStyle}>
			<BoxImgInner>
				{imageSrc && (
					<BoxImgMedia>
						<DefaultImage>
							{boxImage}
						</DefaultImage>
						<HoverImage>
							{hoverImage}
						</HoverImage>
					</BoxImgMedia>
				)}
				<BoxImgContent>
					{title && <HeadingWrap as='h5' {...headingStyle}>{title}</HeadingWrap>}
					{desc && <TextWrap {...descStyle}>{desc}</TextWrap>}
					<Button
						className="button"
						to={path}
						icon="far fa-long-arrow-right"
						iconposition="right"
						icondistance="4px"
						varient="texted"
						hover="false">Discover Now</Button>
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

BoxImage.defaultProps = {
	path: "/"
}

export default BoxImage;