import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import Swiper from "@ui/swiper";
import ImageOne from "@data/images/blog/blog-02-1170x600.jpg";
import ImageTwo from "@data/images/blog/blog-03-1170x600.jpg";
import ImageThree from "@data/images/blog/blog-04-1170x600.jpg";
import ImageFour from "@data/images/blog/blog-05-1170x600.jpg";
import { SectionWrap } from "./style";

const FullWideSlider = ({ sliderSettings }) => {
	return (
		<SectionWrap>
			<Container>
				<Row>
					<Col lg={12}>
						<Heading as="h3" mb="60px" textalign="center">Full Wide Slider</Heading>
					</Col>
				</Row>
				<Row>
					<Col lg={12}>
						<Swiper settings={sliderSettings}>
							<div className="item">
								<img src={ImageOne} alt="Slider" />
							</div>
							<div className="item">
								<img src={ImageTwo} alt="Slider" />
							</div>
							<div className="item">
								<img src={ImageThree} alt="Slider" />
							</div>
							<div className="item">
								<img src={ImageFour} alt="Slider" />
							</div>
						</Swiper>
					</Col>
				</Row>
			</Container>
		</SectionWrap>
	)
}

FullWideSlider.defaultProps = {
	sliderSettings: {
		slidesPerView: 1,
		loop: true,
		arrows: true,
		paginationStyle: {
			mt: '50px'
		},
		breakpoints: {
			1499: {
				slidesPerView: 3
			},

			991: {
				slidesPerView: 2
			},

			767: {
				slidesPerView: 1

			},
			320: {
				slidesPerView: 1
			}
		}
	}
}

export default FullWideSlider
