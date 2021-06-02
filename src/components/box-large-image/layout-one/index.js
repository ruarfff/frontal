import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Button from "@ui/button";
import {
	BoxLargeImgWrap,
	BoxLargeImgInner,
	BoxLargeImgMedia,
	BoxLargeImgBtnWrap,
	BoxLargeImgBtnInner,
	BoxLargeImgHeading,
	HeadingWrap,
	TextWrap,
	BoxLargeImgLink,
	BoxLargeImgContent
} from './box-large-image.style'

const BoxLargeImage = ({ imageSrc, title, desc, path, ...boxStyles }) => {
	const { headingStyle, descStyle, buttonStyle, ...restStyles } = boxStyles;
	let boxImage;
	if (typeof imageSrc === 'object') {
		boxImage = <GatsbyImage image={getImage(imageSrc)} alt={title} />;
	} else {
		boxImage = <img src={imageSrc} alt={title} />
	}

	return (
		<BoxLargeImgWrap {...restStyles}>
			<BoxLargeImgInner>
				{imageSrc && (
					<BoxLargeImgMedia>
						{boxImage}
						<BoxLargeImgBtnWrap>
							<BoxLargeImgBtnInner>
								<Button {...buttonStyle} to={path}>Learn more</Button>
							</BoxLargeImgBtnInner>
						</BoxLargeImgBtnWrap>
						<BoxLargeImgHeading>
							{title && <HeadingWrap as="h5" {...headingStyle}>{title}</HeadingWrap>}
						</BoxLargeImgHeading>
						<BoxLargeImgLink path={path}>{title}</BoxLargeImgLink>
					</BoxLargeImgMedia>
				)}
				<BoxLargeImgContent>
					{desc && <TextWrap {...descStyle}>{parse(desc)}</TextWrap>}
				</BoxLargeImgContent>
			</BoxLargeImgInner>
		</BoxLargeImgWrap>
	)
}

BoxLargeImage.propTypes = {
	title: PropTypes.string,
	imageSrc: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	desc: PropTypes.string,
	headingStyle: PropTypes.object,
	descStyle: PropTypes.object
}

BoxLargeImage.defaultProps = {
	buttonStyle: {
		skin: 'light',
		color: 'primary',
		hover: 'false',
		responsive: {
			large: {
				pl: '30px',
				pr: '30px'
			}
		}
	},
	path: "/"
}

export default BoxLargeImage;
