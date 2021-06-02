import React from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";
import {
	VideoButtonWrap,
	VideoButtonInner,
	VideoMark,
	VideoPlay,
	VideoPlayIcon,
	VideoText
} from './video-button.style'

const VideoButton = ({ text, onClick, ...restProps }) => {
	return (
		<VideoButtonWrap onClick={onClick} {...restProps}>
			<VideoButtonInner>
				{restProps.wave !== "false" && (
					<VideoMark>
						<div className="wave-pulse wave-pulse-1"></div>
						<div className="wave-pulse wave-pulse-2"></div>
					</VideoMark>
				)}
				<VideoPlay>
					<VideoPlayIcon></VideoPlayIcon>
				</VideoPlay>
			</VideoButtonInner>
			{text && <VideoText>{parse(text)}</VideoText>}
		</VideoButtonWrap>
	)
}

VideoButton.propTypes = {
	skin: PropTypes.oneOf([
		'primary',
		'secondary',
		'success',
		'danger',
		'warning',
		'info',
		'light',
		'dark',
		'gradient',
		'transparent'
	])
}

VideoButton.defaultProps = {
	skin: 'light'
}


export default VideoButton;