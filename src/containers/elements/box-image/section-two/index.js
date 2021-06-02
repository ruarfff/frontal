import React from "react";
import PropTypes from "prop-types";
import Heading from "@ui/heading";
import Anchor from "@ui/anchor";
import SectionTitle from "@ui/section-title";
import { Container, Row, Col } from "@ui/wrapper";
import BoxImage from "@components/box-image/layout-two";
import image1 from "@data/images/icons/icon-13-80x83.png";
import image2 from "@data/images/icons/icon-14-80x83.png";
import image3 from "@data/images/icons/icon-15-80x83.png";
import image4 from "@data/images/icons/icon-16-80x83.png";
import image5 from "@data/images/icons/icon-17-80x83.png";
import image6 from "@data/images/icons/icon-18-80x83.png";
import { SectionWrap } from "./section.style"

const BoxSection = ({ headingStyle, linkStyle }) => {

	const boxContents = [
		{
			id: 1,
			imageSrc: image1,
			title: 'Backup and recovery '
		},
		{
			id: 2,
			imageSrc: image2,
			title: 'Cloud Managed Services'
		},
		{
			id: 3,
			imageSrc: image3,
			title: 'IT Security & Compliance'
		},
		{
			id: 4,
			imageSrc: image4,
			title: 'Software Development'
		},
		{
			id: 5,
			imageSrc: image5,
			title: 'Managed IT Services'
		},
		{
			id: 6,
			imageSrc: image6,
			title: 'IT consultancy'
		}
	]
	return (
		<SectionWrap>
			<Container>
				<Row>
					<Col xl={12}>
						<SectionTitle
							subtitle="OUR SERVICES"
							title="For your very specific industry, <br/> we have <span>highly-tailored IT solutions.</span>"
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
									/>
								</Col>
							)
						})
					}
				</Row>
				<Row>
					<Col lg={12}>
						<Heading {...headingStyle}>Challenges are just opportunities in disguise. <Anchor {...linkStyle} path="/">Take the challenge!</Anchor></Heading>
					</Col>
				</Row>
			</Container>
		</SectionWrap>
	)
}

BoxSection.propTypes = {
	headingStyle: PropTypes.object,
	linkStyle: PropTypes.object
}

BoxSection.defaultProps = {
	headingStyle: {
		as: 'h3',
		fontSize: '18px',
		fontweight: 500,
		lineHeight: 1.40,
		color: '#333333',
		mt: '40px',
		textalign: 'center'
	},
	linkStyle: {
		layout: 'underline',
		hover: {
			layout: 2
		}
	}
}

export default BoxSection;