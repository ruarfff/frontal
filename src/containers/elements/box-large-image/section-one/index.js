import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "@ui/wrapper";
import Anchor from "@ui/anchor";
import SectionTitle from "@ui/section-title";
import BoxLargeImage from "@components/box-large-image/layout-one";
import image1 from "@data/images/box-image/image-03-330x330.jpg";
import image2 from "@data/images/box-image/image-05-330x330.jpg";
import image3 from "@data/images/box-image/image-06-330x330.jpg";
import { SectionWrap } from "./section.style"

const BoxSection = ({ sectionTitleStyle, linkStyle, sectionBottomStyle }) => {
	const boxContents = [
		{
			id: 1,
			imageSrc: image1,
			title: 'Reliable Multi-function Technology',
			desc: 'Our technical experts have a flair for developing <strong>clean-coded websites</strong> based on customers’ needs, global guidelines and trends.'
		},
		{
			id: 2,
			imageSrc: image2,
			title: 'Efficient Database Security ',
			desc: 'Our technical experts have a flair for developing <strong>clean-coded websites</strong> based on customers’ needs, global guidelines and trends.'
		},
		{
			id: 3,
			imageSrc: image3,
			title: 'Reliable Multi-function Technology',
			desc: 'Our technical experts have a flair for developing <strong>clean-coded websites</strong> based on customers’ needs, global guidelines and trends.'
		}
	]

	return (
		<SectionWrap>
			<Container>
				<Row>
					<Col xl={12}>
						<SectionTitle
							{...sectionTitleStyle}
							subtitle="HIRE US, WHY NOT?"
							title="What make us <span>special?</span>"
						/>
					</Col>
				</Row>
				<Row className="gutter-xl-70">
					{
						boxContents.map(boxContent => {
							return (
								<Col lg={4} md={6} className="box-item" key={`box-image-${boxContent.id}`}>
									<BoxLargeImage
										title={boxContent.title}
										desc={boxContent.desc}
										imageSrc={boxContent.imageSrc}
									/>
								</Col>
							)
						})
					}
				</Row>
				<Row {...sectionBottomStyle}>
					<Col lg={12}>
						<Anchor {...linkStyle} path="/">Learn more about how we work  <i className="far fa-long-arrow-right icon"></i></Anchor>
					</Col>
				</Row>
			</Container>
		</SectionWrap>
	)
}


BoxSection.propTypes = {
	sectionTitleStyle: PropTypes.object,
	linkStyle: PropTypes.object,
	sectionBottomStyle: PropTypes.object
}

BoxSection.defaultProps = {
	sectionTitleStyle: {
		mb: '30px',
		responsive: {
			medium: {
				mb: '17px'
			}
		}
	},
	linkStyle: {
		fontSize: '18px',
		fontWeight: 500,
		lineheight: 1.40,
		color: 'primary',
		layout: 'underline',
		hover: {
			layout: 2
		}
	},
	sectionBottomStyle: {
		mt: '40px',
		align: 'center'
	}
}

export default BoxSection;