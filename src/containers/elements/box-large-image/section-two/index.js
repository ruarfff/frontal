import React from "react";
import PropTypes from "prop-types";
import Button from "@ui/button";
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

const BoxSection = ({ sectionBottomStyle, btnStyleOne, btnStyleTwo }) => {

	const boxContents = [
		{
			id: 1,
			imageSrc: image1,
			title: 'Backup and recovery ',
			category: "Cyber Security"
		},
		{
			id: 2,
			imageSrc: image2,
			title: 'Cloud Managed Services',
			category: "Cyber Security"
		},
		{
			id: 3,
			imageSrc: image3,
			title: 'IT Security & Compliance',
			category: "Cyber Security"
		},
		{
			id: 4,
			imageSrc: image4,
			title: 'Software Development',
			category: "Cyber Security"
		},
		{
			id: 5,
			imageSrc: image5,
			title: 'Managed IT Services',
			category: "Cyber Security"
		},
		{
			id: 6,
			imageSrc: image6,
			title: 'IT consultancy',
			category: "Cyber Security"
		}
	]
	return (
		<SectionWrap>
			<Container>
				<Row>
					<Col xl={12}>
						<SectionTitle
							subtitle="OPTIMAL IT MANAGEMENT SOLUTIONS"
							title="We run all kinds of IT services <br/> that vow your <span>success</span>"
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
				<Row {...sectionBottomStyle}>
					<Col lg={12}>
						<Button {...btnStyleOne}>Learn More</Button>
						<Button {...btnStyleTwo}>Contact Us</Button>
					</Col>
				</Row>
			</Container>
		</SectionWrap>
	)
}

BoxSection.propTypes = {
	sectionBottomStyle: PropTypes.object,
	btnStyleOne: PropTypes.object,
	btnStyleTwo: PropTypes.object
}

BoxSection.defaultProps = {
	sectionBottomStyle: {
		mt: '40px',
		align: 'center'
	},
	btnStyleOne: {
		m: '10px'
	},
	btnStyleTwo: {
		m: '10px',
		varient: 'outlined'
	}
}

export default BoxSection;