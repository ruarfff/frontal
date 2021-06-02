import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import FeatureBox from "@components/box-image/layout-three";
import SwiperSlider from "@ui/swiper";
import { FeatureWrapper } from "./feature.style";

const Feature = ({ slider }) => {
	const featureData = useStaticQuery(graphql`
    query featureQuery {
      landingJson(id: {eq: "site_features"}) {
        id
        items {
          title
          desc
          image {
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
    `)

	const features = featureData.landingJson.items;

	return (
		<FeatureWrapper>
			<SwiperSlider settings={slider}>
				{features.map((feature, i) => {
					return (
						<div className="item" key={`feature-${i}`}>
							<FeatureBox
								title={feature.title}
								desc={feature.desc}
								imageSrc={feature.image}
							/>
						</div>
					)
				})}
			</SwiperSlider>
		</FeatureWrapper>
	)
}

Feature.propTypes = {
	slider: PropTypes.object
}

Feature.defaultProps = {
	slider: {
		slidesPerView: 4,
		loop: true,
		pagination: false,
		breakpoints: {
			320: {
				slidesPerView: 1
			},
			576: {
				slidesPerView: 2
			},
			768: {
				slidesPerView: 2
			},
			992: {
				slidesPerView: 3
			},
			1500: {
				slidesPerView: 4
			}
		}
	}
}

export default Feature;