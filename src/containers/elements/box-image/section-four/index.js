import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "@ui/section-title";
import BoxImage from "@components/box-image/layout-four";
import { Container, Row, Col } from "@ui/wrapper";
import image1 from "@data/images/icons/icon-07-60x60.png";
import image2 from "@data/images/icons/icon-08-60x60.png";
import image3 from "@data/images/icons/icon-09-60x60.png";
import image4 from "@data/images/icons/icon-10-60x60.png";
import image5 from "@data/images/icons/icon-11-60x60.png";
import image6 from "@data/images/icons/icon-12-60x60.png";
import { SectionWrap } from "./section.style";

const BoxSection = ({ sectionTitleStyle }) => {

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
			title: 'Workforce Management',
			desc: 'Suspe ndisse suscipit sagittis leo sit met condime ntum esti laiolainx bulum iscipit sagittis leo sit met con ndisse suscipit sagittis leo sit met cone su'
		},
		{
			id: 5,
			imageSrc: image5,
			title: 'Business Reform',
			desc: 'We provide the most responsive and functional IT design for companies and businesses worldwide.'
		},
		{
			id: 6,
			imageSrc: image6,
			title: 'Infrastructure Plan',
			desc: 'Mitech takes into account all conditions and budgets needed for building infrastructure plan..'
		}
	]
	return (
		<SectionWrap>
			<Container>
				<Row>
					<Col xl={12}>
						<SectionTitle
							{...sectionTitleStyle}
							title="Affordable IT Support for <span>Businesses</span>"
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
	sectionTitleStyle: PropTypes.object
}

BoxSection.defaultProps = {
	sectionTitleStyle: {
		mb: '30px',
		responsive: {
			medium: {
				mb: '17px'
			}
		}
	}
}

export default BoxSection;