import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "@ui/heading";
import Counter from "@components/counter/layout-three";
import { SectionWrap, HeaderWrap } from "./section.style";

const Section = ({ markHeading, headingStyle }) => {
	return (
		<SectionWrap>
			<Container>
				<Row>
					<Col lg={{ span: 4, offset: 1 }}>
						<HeaderWrap>
							<Heading {...markHeading}><mark>38</mark> YEARS’ EXPERIENCE IN IT</Heading>
							<Heading {...headingStyle}>Learn more about our <span>Success Stories</span></Heading>
						</HeaderWrap>
					</Col>
					<Col lg={7} md={8}>
						<Row>
							<Col sm={6}>
								<Counter
									countTo={1790}
									text="ACCOUNT NUMBERS"
								/>
							</Col>
							<Col sm={6}>
								<Counter
									countTo={32}
									text="FINISHED PROJECTS"
								/>
							</Col>
							<Col sm={6}>
								<Counter
									countTo={73}
									text="HAPPY CLIENTS"
								/>
							</Col>
							<Col sm={6}>
								<Counter
									countTo={318}
									text="BLOG POSTS"
								/>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</SectionWrap>
	)
}

Section.propTypes = {
	counterStyle: PropTypes.object
}

Section.defaultProps = {
	markHeading: {
		layout: 'highlight',
	},
	headingStyle: {
		as: 'h3',
		mt: '25px',
		fontSize: '38px',
		child: {
			color: 'primary'
		},
		responsive: {
			large: {
				fontSize: '30px'
			},
			small: {
				fontSize: '24px'
			}
		}
	}
}


export default Section;