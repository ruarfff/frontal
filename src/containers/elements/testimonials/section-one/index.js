import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "@ui/section-title";
import SwiperSlider from "@ui/swiper";
import Testimonial from "@components/testimonial/layout-one";
import author1img from "@data/images/avatar/avatar-01-90x90.jpg";
import author2img from "@data/images/avatar/avatar-02-90x90.jpg";
import author3img from "@data/images/avatar/avatar-03-90x90.jpg";
import { SectionWrap } from "./section.style";

const Section = ({ SectionTitleStyle, slider, sliderStyle }) => {
	const testimonials = [
		{
			id: 1,
			authorImg: author1img,
			authorName: 'Abbie Ferguson',
			authroRole: 'Marketing',
			review: 'I’ve been working with over 35 IT companies on more than 200 projects of our company, but @Mitech is one of the most impressive to me.',
			rating: 5
		},
		{
			id: 2,
			authorImg: author2img,
			authorName: 'John Snow',
			authroRole: 'Web designer',
			review: 'I’ve been working with over 35 IT companies on more than 200 projects of our company, but @Mitech is one of the most impressive to me.',
			rating: 3
		},
		{
			id: 3,
			authorImg: author3img,
			authorName: 'Monica Blews',
			authroRole: 'Web develop',
			review: 'I’ve been working with over 35 IT companies on more than 200 projects of our company, but @Mitech is one of the most impressive to me.',
			rating: 4
		}
	]
	return (
		<SectionWrap>
			<Container>
				<Row>
					<Col md={12}>
						<SectionTitle
							{...SectionTitleStyle}
							subtitle="TESTIMONIALS"
							title="Why do people <span>love Mitech?</span>"
						/>
					</Col>
				</Row>
				<Row>
					<Col lg={12}>
						<SwiperSlider settings={slider} {...sliderStyle}>
							{testimonials.map((testimonial, i) => {
								return (
									<div key={i} className="item">
										<Testimonial
											authorImg={testimonial.authorImg}
											authorName={testimonial.authorName}
											authroRole={testimonial.authroRole}
											review={testimonial.review}
											rating={testimonial.rating}
										/>
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
	SectionTitleStyle: PropTypes.object
}

Section.defaultProps = {
	SectionTitleStyle: {
		mb: '40px'
	},
	slider: {
		slidesPerView: 2,
		loop: true,
		speed: 1000,
		spaceBetween: 30,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		breakpoints: {
			320: {
				slidesPerView: 1
			},
			991: {
				slidesPerView: 2
			}
		}
	},
	sliderStyle: {
		pagination: {
			mt: '30px'
		}
	}
}


export default Section;