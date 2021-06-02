import React from "react";
import PropTypes from "prop-types";
import Heading from "@ui/heading";
import Link from "@ui/anchor";
import SectionTitle from "@ui/section-title";
import BoxImage from "@components/box-image/layout-five";
import { Container, Row, Col } from "@ui/wrapper";
import image1 from "@data/images/icons/icon-01-100x98.png";
import image1Hover from "@data/images/icons/icon-01-hover-100x98.png";
import image2 from "@data/images/icons/icon-04-100x98.png";
import image2Hover from "@data/images/icons/icon-04-hover-100x98.png";
import image3 from "@data/images/icons/icon-06-100x98.png";
import image3Hover from "@data/images/icons/icon-06-hover-100x98.png";
import { SectionWrap } from "./section.style";

const BoxSection = ({ sectionTitleStyle, headingStyle, linkStyle }) => {
	const boxContents = [
		{
			id: 1,
			imageSrc: image1,
			hoverImg: image1Hover,
			title: 'IT Design',
			desc: 'We provide the most responsive and functional IT design for companies and businesses worldwide.'
		},
		{
			id: 2,
			imageSrc: image2,
			hoverImg: image2Hover,
			title: 'IT Management',
			desc: 'It’s possible to simultaneously manage and transform information from one server to another.'
		},
		{
			id: 3,
			imageSrc: image3,
			hoverImg: image3Hover,
			title: 'Data Security',
			desc: 'Back up your database, store in a safe and secure place while still maintaining its accessibility.'
		}
	]
	return (
		<SectionWrap>
			<Container>
				<Row>
					<Col xl={12}>
						<SectionTitle
							{...sectionTitleStyle}
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
										title={boxContent.title}
										desc={boxContent.desc}
										imageSrc={boxContent.imageSrc}
										hoverImg={boxContent.hoverImg}
										path="/"
									/>
								</Col>
							)
						})
					}
				</Row>
				<Row>
					<Col lg={12}>
						<Heading {...headingStyle}>Challenges are just opportunities in disguise. <Link {...linkStyle} path="/">Take the challenge!</Link></Heading>
					</Col>
				</Row>
			</Container>
		</SectionWrap>
	)
}


BoxSection.propTypes = {
	sectionTitleStyle: PropTypes.object,
	headingStyle: PropTypes.object,
	linkStyle: PropTypes.object
}

BoxSection.defaultProps = {
	sectionTitleStyle: {
		mb: '20px',
		responsive: {
			medium: {
				mb: '7px'
			}
		}
	},
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