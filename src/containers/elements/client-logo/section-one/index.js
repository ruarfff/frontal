import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import SwiperSlider from "@ui/swiper";
import ClientLogo from "@ui/client-logo";
import BrandImage1 from "@data/images/partners/mitech-client-logo-01.png";
import BrandImage1Hover from "@data/images/partners/mitech-client-logo-01-hover.png";
import BrandImage2 from "@data/images/partners/mitech-client-logo-02.png";
import BrandImage2Hover from "@data/images/partners/mitech-client-logo-02-hover.png";
import BrandImage3 from "@data/images/partners/mitech-client-logo-03.png";
import BrandImage3Hover from "@data/images/partners/mitech-client-logo-03-hover.png";
import BrandImage4 from "@data/images/partners/mitech-client-logo-04.png";
import BrandImage4Hover from "@data/images/partners/mitech-client-logo-04-hover.png";
import BrandImage5 from "@data/images/partners/mitech-client-logo-05.png";
import BrandImage5Hover from "@data/images/partners/mitech-client-logo-05-hover.png";
import BrandImage6 from "@data/images/partners/mitech-client-logo-06.png";
import BrandImage6Hover from "@data/images/partners/mitech-client-logo-06-hover.png";
import BrandImage7 from "@data/images/partners/mitech-client-logo-07.png";
import BrandImage7Hover from "@data/images/partners/mitech-client-logo-07-hover.png";
import BrandImage8 from "@data/images/partners/mitech-client-logo-08.png";
import BrandImage8Hover from "@data/images/partners/mitech-client-logo-08-hover.png";
import BrandImage9 from "@data/images/partners/mitech-client-logo-09.png";
import BrandImage9Hover from "@data/images/partners/mitech-client-logo-09-hover.png";
import { SectionWrap } from "./section.style";

const Section = ({ slider, sliderStyle }) => {
	const [sliderImg] = useState([
		{
			img: BrandImage1,
			hoverImg: BrandImage1Hover
		},
		{
			img: BrandImage2,
			hoverImg: BrandImage2Hover
		},
		{
			img: BrandImage3,
			hoverImg: BrandImage3Hover
		},
		{
			img: BrandImage4,
			hoverImg: BrandImage4Hover
		},
		{
			img: BrandImage5,
			hoverImg: BrandImage5Hover
		},
		{
			img: BrandImage6,
			hoverImg: BrandImage6Hover
		},
		{
			img: BrandImage7,
			hoverImg: BrandImage7Hover
		},
		{
			img: BrandImage8,
			hoverImg: BrandImage8Hover
		},
		{
			img: BrandImage9,
			hoverImg: BrandImage9Hover
		}
	])
	return (
		<SectionWrap>
			<Container>
				<Row>
					<Col lg={12}>
						<SwiperSlider settings={slider} {...sliderStyle}>
							{sliderImg.map((slide, i) => {
								return (
									<div key={i} className="item">
										<ClientLogo brandImage={slide.img} hoverImage={slide.hoverImg} />
									</div>
								)
							})}
						</SwiperSlider>
					</Col>
				</Row>
			</Container>
		</SectionWrap>
	)
}

Section.propTypes = {
	slider: PropTypes.object
}

Section.defaultProps = {
	slider: {
		slidesPerView: 6,
		loop: true,
		speed: 1000,
		spaceBetween: 30,
		autoplay: {
			delay: 2500
		},
		breakpoints: {
			320: {
				slidesPerView: 2
			},
			575: {
				slidesPerView: 3
			},
			767: {
				slidesPerView: 4
			},
			991: {
				slidesPerView: 5
			},
			1499: {
				slidesPerView: 6
			}
		}
	},
	sliderStyle: {
		align: 'center'
	}
}


export default Section;