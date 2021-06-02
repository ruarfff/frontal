import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Button from "@ui/button";
import {
	BoxLargeImgWrap,
	BoxLargeImgInner,
	BoxLargeImgMedia,
	BoxLargeImgLink,
	BoxLargeImgContent,
	HeadingWrap,
	CategoryWrap,
	TextWrap,
	BoxLargeImgBtnWrap
} from './box-large-image.style'

const BoxLargeImage = ({ imageSrc, title, category, desc, path, btnText, ...boxStyles }) => {
	const { boxStyle, contentBoxStyle, headingStyle, descStyle, btnStyle } = boxStyles;
	let boxImage;
	if (typeof imageSrc === 'object') {
		boxImage = <GatsbyImage image={getImage(imageSrc)} alt={title} />;
	} else {
		boxImage = <img src={imageSrc} alt={title} />;
	}

	return (
		<BoxLargeImgWrap {...boxStyle}>
			<BoxLargeImgInner>
				{imageSrc && (
					<BoxLargeImgMedia>
						{boxImage}
						<BoxLargeImgLink path={path}>{title}</BoxLargeImgLink>
					</BoxLargeImgMedia>
				)}
				<BoxLargeImgContent {...contentBoxStyle}>
					{title && <HeadingWrap as="h5" {...headingStyle}>{title}</HeadingWrap>}
					{category && <CategoryWrap>{category}</CategoryWrap>}
					{desc && <TextWrap {...descStyle}>{desc}</TextWrap>}
					<BoxLargeImgBtnWrap>
						<Button
							{...btnStyle}
							className="button"
							to={path}
							icon="far fa-long-arrow-right">{btnText}</Button>
					</BoxLargeImgBtnWrap>
				</BoxLargeImgContent>
			</BoxLargeImgInner>
		</BoxLargeImgWrap>
	)
}

BoxLargeImage.propTypes = {
	title: PropTypes.string,
	imageSrc: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.string
	]),
	desc: PropTypes.string,
	path: PropTypes.string,
	btnText: PropTypes.string,
	headingStyle: PropTypes.object,
	descStyle: PropTypes.object,
	btnStyle: PropTypes.object
}

BoxLargeImage.defaultProps = {
	path: '/',
	btnText: 'Discover Now',
	btnStyle: {
		iconposition: "right",
		icondistance: "4px",
		varient: "texted",
		hover: "false",
		display: 'flex',
		justify: 'center',
		alignitems: 'center',
		height: '100%'
	}
}


export default BoxLargeImage;
