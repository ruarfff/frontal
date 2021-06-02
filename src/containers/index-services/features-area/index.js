import FeatureBox from "@components/box-image/layout-three";
import GridLine from "@components/grid-line";
import SwiperSlider from "@ui/swiper";
import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { SectionWrap } from './features-area.stc';

const FeaturesArea = ({ slider, sliderStyle }) => {
	const featuresData = useStaticQuery(graphql`
        query ServicesFeaturesQuery {
            allItSolutionsJson(limit: 3) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        id
                        title
                        excerpt
                        icon {
                            img {
                                childImageSharp {
									gatsbyImageData(
										layout: FIXED
										width: 80
										height: 83
										placeholder: TRACED_SVG
										formats: WEBP
										quality: 100
									)
                                }
                            }
                        }
                    }
                }
            }
        }
    `)
	const features = featuresData.allItSolutionsJson.edges
	return (
		<SectionWrap>
			<GridLine />
			<SwiperSlider settings={slider} {...sliderStyle}>
				{features.map((feature, i) => {
					return (
						<div className="item" key={`feature-${i}`}>
							<FeatureBox
								title={feature.node.title}
								desc={feature.node.excerpt}
								imageSrc={feature.node.icon.img}
								path={`/it-solution/${feature.node.fields.slug}`}
							/>
						</div>
					)
				})}
			</SwiperSlider>
		</SectionWrap>
	)
}

FeaturesArea.propTypes = {
	slider: PropTypes.object,
	sliderStyle: PropTypes.object
}

FeaturesArea.defaultProps = {
	slider: {
		slidesPerView: 3,
		lazy: true,
		breakpoints: {
			500: {
				slidesPerView: 1
			},
			1000: {
				slidesPerView: 2
			},
			1500: {
				slidesPerView: 3
			}
		}
	},
	sliderStyle: {
		pagination: {
			mt: "30px",
			layout: "2"
		}
	}
}

export default FeaturesArea
