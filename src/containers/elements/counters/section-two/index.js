import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import Counter from "@components/counter/layout-two"
import { SectionWrap } from "./section.style";

const Section = ({ counterStyle }) => {
	return (
		<SectionWrap>
			<Container>
				<Row>
					<Col md={3} sm={6}>
						<Counter
							{...counterStyle}
							countTo={1056}
							text="HAPPY CLIENTS"
						/>
					</Col>
					<Col md={3} sm={6}>
						<Counter
							{...counterStyle}
							countTo={491}
							text="FINISHED PROJECTS"
						/>
					</Col>
					<Col md={3} sm={6}>
						<Counter
							{...counterStyle}
							countTo={245}
							text="SKILLED EXPERTS"
						/>
					</Col>
					<Col md={3} sm={6}>
						<Counter
							{...counterStyle}
							countTo={1090}
							text="MEDIA POSTS"
						/>
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
	counterStyle: {
		layout: 2,
		mb: '30px'
	}
}


export default Section;