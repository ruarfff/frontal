import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Button from "@ui/button";

import {
	PreviewWrap,
	PreviewInner,
	FrameScreen,
	Dots,
	PreviewThumb,
	PreviewOverlay,
	PreviewLink,
	ButtonWrap,
	PreviewInfo,
	HeadingWrap
} from './demo.style'

const Demo = ({ content }) => {
	const { path, title, image, coming_soon } = content

	return (
		<PreviewWrap>
			<PreviewInner>
				<FrameScreen>
					{(path && !coming_soon) && <PreviewLink path={path}>{title}</PreviewLink>}
					<Dots>
						<div className="dot"></div>
						<div className="dot"></div>
						<div className="dot"></div>
					</Dots>
					<PreviewThumb>
						{image && <GatsbyImage className="img-fluid" image={getImage(image)} alt={title} />}
						<PreviewOverlay>
							{(path && !coming_soon) && (
								<ButtonWrap>
									<Button to={path} skin="light">View Demo</Button>
								</ButtonWrap>
							)}
							{coming_soon && (
								<ButtonWrap>
									<Button hover="false" skin="light">Coming Soon</Button>
								</ButtonWrap>
							)}
						</PreviewOverlay>
					</PreviewThumb>
					<PreviewInfo>
						{title && <HeadingWrap>{title}</HeadingWrap>}
					</PreviewInfo>
				</FrameScreen>
			</PreviewInner>
		</PreviewWrap>
	)
}

Demo.propTypes = {
	path: PropTypes.string,
	title: PropTypes.string,
	image: PropTypes.object
}

export default Demo;