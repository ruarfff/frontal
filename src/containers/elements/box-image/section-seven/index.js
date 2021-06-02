import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "@ui/section-title";
import BoxImage from "@components/box-image/layout-seven";
import { Container, Row, Col } from "@ui/wrapper";
import image1 from "@data/images/icons/icon-21-68x68.jpg";
import image2 from "@data/images/icons/icon-22-68x68.png";
import image3 from "@data/images/icons/icon-23-68x68.png";
import image4 from "@data/images/icons/icon-24-68x68.png";
import image5 from "@data/images/icons/icon-25-68x68.png";
import image6 from "@data/images/icons/icon-26-68x68.png";
import { SectionWrap } from "./section.style";

const BoxSection = ({ sectionTitleStyle }) => {
	const boxContents = [
		{
			id: 1,
			imageSrc: image1,
			title: 'Expert Typography',
			desc: 'Your site’s typography will benefit from beautiful fonts provided by Font Awesome 5 Pro plugin.'
		},
		{
			id: 2,
			imageSrc: image2,
			title: 'Fast Loading Speed',
			desc: 'Mitech gets a very high pagespeed scores on Pagespeed Insight, Pingdom Tools & GTmetrix.'
		},
		{
			id: 3,
			imageSrc: image3,
			title: 'SEO Optimization',
			desc: 'All elements are fully optimized to help your site compete with other similar ones in search engine.'
		},
		{
			id: 4,
			imageSrc: image4,
			title: 'Cross-browser Adaptability',
			desc: 'We run thorough tests on different browsers to ensure optimal performance on all devices.'
		},
		{
			id: 5,
			imageSrc: image5,
			title: 'Prompt Support',
			desc: 'Any issues with theme configuration and site building will be solved promptly by our professionals.'
		},
		{
			id: 6,
			imageSrc: image6,
			title: 'Abundant Shortcodes',
			desc: 'A wide ranging of shortcodes are added to Mitech for assisting users on page building process.'
		}
	]
	return (
		<SectionWrap>
			<Container>
				<Row>
					<Col xl={12}>
						<SectionTitle
							{...sectionTitleStyle}
							subtitle="MORE FEATURES"
							title="<span>Richness</span> of Theme Features"
						/>
					</Col>
				</Row>
				<Row>
					{
						boxContents.map(boxContent => {
							return (
								<Col lg={4} md={6} className="box-item" key={`box-image-${boxContent.id}`}>
									<BoxImage
										imageSrc={boxContent.imageSrc}
										title={boxContent.title}
										desc={boxContent.desc}
										path="/"
									/>
								</Col>
							)
						})
					}
				</Row>
			</Container>
		</SectionWrap>
	)
}


BoxSection.propTypes = {
	sectionStyle: PropTypes.object,
	colStyle: PropTypes.object,
	sectionTitleStyle: PropTypes.object
}

BoxSection.defaultProps = {
	sectionTitleStyle: {
		mb: '10px'
	}
}

export default BoxSection;