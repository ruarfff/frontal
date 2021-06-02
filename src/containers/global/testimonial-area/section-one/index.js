import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import SwiperSlider from "@ui/swiper";
import Testimonial from "@components/testimonial/layout-one";
import { TestimonialWrapper } from './section.style'

const TestimonialSection = ({ sectionTitleStyle, slider, sliderStyle }) => {
	const testimonialData = useStaticQuery(graphql`
    query GlobalTestimonialQuery {
        allTestimonialsJson {
            edges {
              node {
                id
                author_name
                author_designation
                rating
                review
                author_image {
					childImageSharp {
						gatsbyImageData(
							layout: FIXED
							width: 90
							height: 90
							quality: 100
							placeholder: TRACED_SVG
							formats: WEBP
						)
					}
                }
              }
            }
        }
    }
    `);
	// const testimonialSecData = testimonialData.appointmentJson;
	const testimonials = testimonialData.allTestimonialsJson.edges;
	return (
		<TestimonialWrapper>
			<Container>
				<Row>
					<Col lg={12}>
						<SectionTitle
							{...sectionTitleStyle}
							title="What do people praise about <span>Mitech?</span>"
							subtitle="TESTIMONIALS"
						/>
					</Col>
				</Row>
				<Row>
					<Col lg={12}>
						<SwiperSlider {...sliderStyle} settings={slider}>
							{testimonials.map(testimonial => (
								<div className="item" key={testimonial.node.id}>
									<Testimonial
										authorName={testimonial.node.author_name}
										authroRole={testimonial.node.author_designation}
										authorImg={testimonial.node.author_image}
										rating={testimonial.node.rating}
										review={testimonial.node.review}
									/>
								</div>
							))}
						</SwiperSlider>
					</Col>
				</Row>
			</Container>
		</TestimonialWrapper>
	)
}

TestimonialSection.propTypes = {
	sliderStyle: PropTypes.object,
	sectionTitleStyle: PropTypes.object,
	slider: PropTypes.object
}

TestimonialSection.defaultProps = {
	sectionTitleStyle: {
		mb: '40px',
		responsive: {
			small: {
				mb: '30px'
			}
		}
	},
	slider: {
		slidesPerView: 2,
		loop: true,
		spaceBetween: 30,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		breakpoints: {
			320: {
				slidesPerView: 1
			},
			992: {
				slidesPerView: 2
			}
		}
	},
	sliderStyle: {
		pagination: {
			mt: '28px'
		}
	},
}

export default TestimonialSection;