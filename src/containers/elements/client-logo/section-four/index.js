import React, { useState } from "react";
import PropTypes from "prop-types";
import SwiperSlider from "@ui/swiper";
import ClientLogo from "@ui/client-logo";
import { Container, Row, Col } from "@ui/wrapper";
import BrandImage1 from "@data/images/partners/mitech-client-logo-01-hover.png";
import BrandImage2 from "@data/images/partners/mitech-client-logo-02-hover.png";
import BrandImage3 from "@data/images/partners/mitech-client-logo-03-hover.png";
import BrandImage4 from "@data/images/partners/mitech-client-logo-04-hover.png";
import BrandImage5 from "@data/images/partners/mitech-client-logo-05-hover.png";
import BrandImage6 from "@data/images/partners/mitech-client-logo-06-hover.png";
import BrandImage7 from "@data/images/partners/mitech-client-logo-07-hover.png";
import BrandImage8 from "@data/images/partners/mitech-client-logo-08-hover.png";
import BrandImage9 from "@data/images/partners/mitech-client-logo-09-hover.png";
import { SectionWrap } from "./section.style";

const Section = ({ slider, sliderStyle }) => {
	const [sliderImg] = useState([
		{
			img: BrandImage1
		},
		{
			img: BrandImage2
		},
		{
			img: BrandImage3
		},
		{
			img: BrandImage4
		},
		{
			img: BrandImage5
		},
		{
			img: BrandImage6
		},
		{
			img: BrandImage7
		},
		{
			img: BrandImage8
		},
		{
			img: BrandImage9
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
										<ClientLogo brandImage={slide.img} layout={4} />
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