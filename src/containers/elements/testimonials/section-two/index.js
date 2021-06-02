import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import { SectionWrap } from './section.style'
import SectionTitle from "@ui/section-title";
import SwiperSlider from "@ui/swiper";
import Testimonial from "@components/testimonial/layout-two";
import author1img from "@data/images/avatar/avatar-01-70x70.jpg";
import author2img from "@data/images/avatar/avatar-02-70x70.jpg";
import author3img from "@data/images/avatar/avatar-03-70x70.jpg";
import author4img from "@data/images/avatar/avatar-04-70x70.jpg";

const Section = ({ SectionTitleStyle, slider, sliderStyle, testimonialStyle }) => {
	const testimonials = [
		{
			id: 1,
			authorImg: author1img,
			authorName: 'Abbie Ferguson',
			authroRole: 'Marketing',
			subject: 'The Mitech team works really hard to ensure high level of quality',
			review: 'I’ve been working with over 35 IT companies on more than 200 projects of our company, but @Mitech is one of the most impressive to me.',
			rating: 5
		},
		{
			id: 2,
			authorImg: author2img,
			authorName: 'John Snow',
			authroRole: 'Web designer',
			subject: 'The Mitech team works really hard to ensure high level of quality',
			review: 'I’ve been working with over 35 IT companies on more than 200 projects of our company, but @Mitech is one of the most impressive to me.',
			rating: 3
		},
		{
			id: 3,
			authorImg: author3img,
			authorName: 'Monica Blews',
			authroRole: 'Web developer',
			subject: 'The Mitech team works really hard to ensure high level of quality',
			review: 'I’ve been working with over 35 IT companies on more than 200 projects of our company, but @Mitech is one of the most impressive to me.',
			rating: 4
		},
		{
			id: 4,
			authorImg: author4img,
			authorName: 'Stephen',
			authroRole: 'Web developer',
			subject: 'The Mitech team works really hard to ensure high level of quality',
			review: 'I’ve been working with over 35 IT companies on more than 200 projects of our company, but @Mitech is one of the most impressive to me.',
			rating: 4
		}
	]
	return (
		<SectionWrap>
			<Container fluid className="cp-80">
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
											testimonialStyle={testimonialStyle}
											authorImg={testimonial.authorImg}
											authorName={testimonial.authorName}
											authroRole={testimonial.authroRole}
											subject={testimonial.subject}
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
		mb: '60px'
	},
	slider: {
		slidesPerView: 3,
		centeredSlides: true,
		loop: true,
		speed: 1000,
		spaceBetween: 50,
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
			},
			1499: {
				slidesPerView: 3
			}
		}
	},
	sliderStyle: {
		opacityStyle: true,
		pagination: {
			mt: '30px'
		}
	},
}


export default Section;