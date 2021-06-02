import React from "react";
import PropTypes from "prop-types";
import Heading from "@ui/heading";
import Anchor from "@ui/anchor";
import SectionTitle from "@ui/section-title";
import { Container, Row, Col } from "@ui/wrapper";
import BoxImage from "@components/box-image/layout-one";
import image1 from "@data/images/icons/icon-01-100x108.png";
import image2 from "@data/images/icons/icon-02-100x108.png";
import image3 from "@data/images/icons/icon-03-100x108.png";
import image4 from "@data/images/icons/icon-04-100x108.png";
import image5 from "@data/images/icons/icon-05-100x108.png";
import image6 from "@data/images/icons/icon-06-100x108.png";
import { SectionWrap } from "./section.style";

const BoxSection = ({ sectionTitleStyle, headingStyle, linkStyle }) => {
	const boxContents = [
		{
			id: 1,
			imageSrc: image1,
			title: 'IT Design',
			desc: 'We provide the most responsive and functional IT design for companies and businesses worldwide.'
		},
		{
			id: 2,
			imageSrc: image2,
			title: 'IT Management',
			desc: 'It’s possible to simultaneously manage and transform information from one server to another.'
		},
		{
			id: 3,
			imageSrc: image3,
			title: 'Data Security',
			desc: 'Back up your database, store in a safe and secure place while still maintaining its accessibility.'
		},
		{
			id: 4,
			imageSrc: image4,
			title: 'Business Reform',
			desc: 'We propose feasible & practical plans for successfully transform businesses based on their needs.'
		},
		{
			id: 5,
			imageSrc: image5,
			title: 'Infrastructure Plan',
			desc: 'Mitech takes into account all conditions and budgets needed for building infrastructure plan.'
		},
		{
			id: 6,
			imageSrc: image6,
			title: 'Firewall Advancement',
			desc: 'Enhancing the strength and security of firewalls to protect online data from malicious sources.'
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
										imageSrc={boxContent.imageSrc}
										desc={boxContent.desc}
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
	sectionTitleStyle: PropTypes.object,
	headingStyle: PropTypes.object,
	linkStyle: PropTypes.object
}

BoxSection.defaultProps = {
	sectionTitleStyle: {
		mb: '60px',
		responsive: {
			medium: {
				mb: '47px'
			}
		}
	},
	headingStyle: {
		as: 'h3',
		fontSize: '18px',
		fontweight: 500,
		lineHeight: 1.40,
		color: '#333333',
		mt: '10px',
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