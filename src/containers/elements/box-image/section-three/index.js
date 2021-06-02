import React from "react";
import BoxImage from "@components/box-image/layout-three";
import { Container, Row, Col } from "@ui/wrapper";
import image1 from "@data/images/icons/icon-13-80x83.png";
import image2 from "@data/images/icons/icon-14-80x83.png";
import image3 from "@data/images/icons/icon-15-80x83.png";
import image4 from "@data/images/icons/icon-16-80x83.png";
import { SectionWrap } from "./section.style";

const BoxSection = ({ sectionStyle }) => {

	const boxContents = [
		{
			id: 1,
			imageSrc: image1,
			title: 'Business Reform',
			desc: 'We propose feasible & practical plans for successfully transform businesses based on their needs.'
		},
		{
			id: 2,
			imageSrc: image2,
			title: 'Infrastructure Plan',
			desc: 'Mitech takes into account all conditions and budgets needed for building infrastructure plan.'
		},
		{
			id: 3,
			imageSrc: image3,
			title: 'Firewall Advancement',
			desc: 'Enhancing the strength and security of firewalls to protect online data from malicious sources.'
		},
		{
			id: 4,
			imageSrc: image4,
			title: 'Desktop Computing',
			desc: 'Programming is taken care of by our experienced and professional specialist in IT management.'
		}
	]
	return (
		<SectionWrap>
			<Container fluid px={0}>
				<Row noGutter>
					{
						boxContents.map(boxContent => {
							return (
								<Col lg={3} md={6} className="box-item" key={`box-image-${boxContent.id}`}>
									<BoxImage
										imageSrc={boxContent.imageSrc}
										title={boxContent.title}
										desc={boxContent.desc}
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

export default BoxSection;