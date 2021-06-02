import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import PopupVideoOne from "@ui/popup-video/layout-one";
import PopupVideoTwo from "@ui/popup-video/layout-two";
import ImageOne from "@data/images/box-image/video-image-01-570x420.jpg";
import { SectionWrap } from "./style";

const PopupVideoArea = () => {
	return (
		<SectionWrap>
			<Container>
				<Row>
					<Col md={6} className="popup-one">
						<PopupVideoOne
							image={ImageOne}
							video_link="https://www.youtube.com/watch?v=9No-FiEInLA"
						/>
					</Col>
					<Col md={6}>
						<PopupVideoTwo
							image={ImageOne}
							video_link="https://www.youtube.com/watch?v=9No-FiEInLA"
						/>
					</Col>
				</Row>
			</Container>
		</SectionWrap>
	)
}

export default PopupVideoArea
