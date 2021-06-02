import React, { useState, Fragment } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import VideoButton from "@ui/video-button";
import ModalVideo from "@ui/modal-video";
import { PopupVideoWrap, VideoBtnWrap } from "./style";

const PopupVideo = ({ image, video_link }) => {
	const gatsbyImg = image && image.childImageSharp;
	const imageSrc = gatsbyImg || image;
	let boxImage;
	if (typeof imageSrc === 'object') {
		boxImage = <GatsbyImage image={getImage(imageSrc)} alt="popup video" />;
	} else {
		boxImage = <img src={imageSrc} alt="popup video" />
	}
	const [videoOpen, setVideoOpen] = useState(false);
	let video_arr, video_id, video_channel;
	if (video_link) {
		video_arr = video_link.split('=', -1);
		video_id = video_arr[1];
		video_channel = video_link.split(".")[1];
	}
	const modalVideoOpen = () => {
		setVideoOpen(true)
	}
	const modalVideoClose = () => {
		setVideoOpen(false)
	}
	return (
		<Fragment>
			<PopupVideoWrap>
				{boxImage}
				<VideoBtnWrap>
					<VideoButton skin="primary" onClick={modalVideoOpen} />
				</VideoBtnWrap>
			</PopupVideoWrap>
			<ModalVideo
				channel={video_channel}
				videoId={video_id}
				isOpen={videoOpen}
				onClose={modalVideoClose}
			/>
		</Fragment>
	)
}

export default PopupVideo
