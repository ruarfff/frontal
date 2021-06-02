import React from "react";
import ModalVideo from 'react-modal-video'
import { StyledModalVideo } from "./style";
// import './modal.css';

const VideoModal = ({ channel, isOpen, videoId, onClose }) => {
	return (
		<StyledModalVideo>
			<ModalVideo
				channel={channel}
				isOpen={isOpen}
				videoId={videoId}
				onClose={onClose} />
		</StyledModalVideo>
	)
}

export default VideoModal;