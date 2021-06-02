import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "@ui/section-title";
import Anchor from "@ui/anchor";
import { Container, Row, Col } from "@ui/wrapper";
import BoxLargeImage from "@components/box-large-image/layout-two";
import image1 from "@data/images/box-image/image-03-480x298.jpg";
import image2 from "@data/images/box-image/image-06-480x298.jpg";
import image3 from "@data/images/box-image/image-05-480x298.jpg";
import { SectionWrap } from "./section.style";

const BoxSection = ({ linkStyle, sectionTitleStyle, sectionBottomStyle, boxStyles }) => {
	const boxContents = [
		{
			id: 1,
			imageSrc: image1,
			title: 'Info Security Management',
			desc: 'At Mitech, we have a holistic and integrated approach towards core modernization to experience technological evolution.'
		},
		{
			id: 2,
			imageSrc: image2,
			title: 'Highly Professional Staffs',
			desc: 'Having obtained the official & formal training in IT technology and technical fields, our staffs know best.'
		},
		{
			id: 3,
			imageSrc: image3,
			title: 'Info Security Management',
			desc: 'At Mitech, we have a holistic and integrated approach towards core modernization to experience technological evolution.'
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
							title="What make us <span>excel?</span>"
						/>
					</Col>
				</Row>
				<Row>
					{
						boxContents.map(boxContent => {
							return (
								<Col lg={4} md={6} className="box-item" key={`box-image-${boxContent.id}`}>
									<BoxLargeImage
										{...boxStyles}
										imageSrc={boxContent.imageSrc}
										title={boxContent.title}
										desc={boxContent.desc}
									/>
								</Col>
							)
						})
					}
				</Row>
				<Row {...sectionBottomStyle}>
					<Col lg={12}>
						<Anchor {...linkStyle} path="/">Learn more about how we work <i className="far fa-long-arrow-right icon"></i></Anchor>
					</Col>
				</Row>
			</Container>
		</SectionWrap>
	)
}

BoxSection.propTypes = {
	sectionTitleStyle: PropTypes.object,
	headingStyle: PropTypes.object,
	linkStyle: PropTypes.object,
	boxStyles: PropTypes.object
}

BoxSection.defaultProps = {
	sectionTitleStyle: {
		mb: '20px',
		responsive: {
			medium: {
				mb: '10px'
			}
		}
	},
	boxStyles: {
		headingStyle: {
			color: '#000'
		}
	},
	linkStyle: {
		layout: 'underline',
		fontSize: '18px',
		fontWeight: 500,
		lineheight: 1.40,
		color: 'primary',
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