import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
	BoxImgWrapper,
	BoxImgInner,
	BoxImgWrap,
	BoxContentWrap,
	BoxCircleBtnWrap,
	BoxCircleBtnInner,
	HeadingWrap,
	TextWrap,
	BoxCircleBtn
} from './box-image.style'


const BoxImage = ({ title, imageSrc, desc, path, ...boxStyles }) => {
	const { headingStyle, descStyle, ...restStyles } = boxStyles;
	let boxImage;
	if (typeof imageSrc === 'object') {
		boxImage = <GatsbyImage image={getImage(imageSrc)} alt={title} />;
	} else {
		boxImage = <img src={imageSrc} alt={title} />
	}
	return (
		<BoxImgWrapper {...restStyles}>
			<BoxImgInner>
				{imageSrc && (
					<BoxImgWrap>
						{boxImage}
					</BoxImgWrap>
				)}
				<BoxContentWrap>
					{title && <HeadingWrap as="h5" {...headingStyle}>{title}</HeadingWrap>}
					{desc && <TextWrap {...descStyle}>{desc}</TextWrap>}
					<BoxCircleBtnWrap>
						<BoxCircleBtnInner>
							<div className="middle-dot"></div>
							<div className="middle-dot dot-2"></div>
							<BoxCircleBtn to={path}>
								<i className="icon far fa-long-arrow-right"></i>
							</BoxCircleBtn>
						</BoxCircleBtnInner>
					</BoxCircleBtnWrap>
				</BoxContentWrap>
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
	headingStyle: PropTypes.object,
	descStyle: PropTypes.object
}

BoxImage.defaultProps = {
	path: "/"
}

export default BoxImage;