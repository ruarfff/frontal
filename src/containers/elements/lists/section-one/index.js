import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import Heading from "@ui/heading";
import List, { ListItem } from "@ui/list";
import { SectionWrap, ListGroupWrap } from "./section.style";

const Section = ({ HeadingStyle, ListOneStyle, ListTwoStyle, ListThreeStyle, ListFourStyle, ListFiveStyle, ListSixStyle }) => {
	return (
		<SectionWrap>
			<Container>
				<Row>
					<Col lg={4} md={6}>
						<ListGroupWrap>
							<Heading {...HeadingStyle}>Separator List</Heading>
							<List {...ListOneStyle}>
								<ListItem>Item text 01</ListItem>
								<ListItem>Item text 02</ListItem>
								<ListItem>Item text 03</ListItem>
								<ListItem>Item text 04</ListItem>
								<ListItem>Item text 05</ListItem>
								<ListItem>Item text 06</ListItem>
							</List>
						</ListGroupWrap>
					</Col>
					<Col lg={4} md={6}>
						<ListGroupWrap>
							<Heading {...HeadingStyle}>Check List</Heading>
							<List {...ListTwoStyle}>
								<ListItem>
									<span className="icon"><i className="fa fa-check"></i></span>
									<span>Item text 01</span>
								</ListItem>
								<ListItem>
									<span className="icon"><i className="fa fa-check"></i></span>
									<span>Item text 02</span>
								</ListItem>
								<ListItem>
									<span className="icon"><i className="fa fa-check"></i></span>
									<span>Item text 03</span>
								</ListItem>
								<ListItem>
									<span className="icon"><i className="fa fa-check"></i></span>
									<span>Item text 04</span>
								</ListItem>
								<ListItem>
									<span className="icon"><i className="fa fa-check"></i></span>
									<span>Item text 05</span>
								</ListItem>
								<ListItem>
									<span className="icon"><i className="fa fa-check"></i></span>
									<span>Item text 06</span>
								</ListItem>
							</List>
						</ListGroupWrap>
					</Col>
					<Col lg={4} md={6}>
						<ListGroupWrap>
							<Heading {...HeadingStyle}>Circle List</Heading>
							<List {...ListThreeStyle}>
								<ListItem>Item text 01</ListItem>
								<ListItem>Item text 02</ListItem>
								<ListItem>Item text 03</ListItem>
								<ListItem>Item text 04</ListItem>
								<ListItem>Item text 05</ListItem>
								<ListItem>Item text 06</ListItem>
							</List>
						</ListGroupWrap>
					</Col>
					<Col lg={4} md={6}>
						<ListGroupWrap>
							<Heading {...HeadingStyle}>Icon List</Heading>
							<List {...ListFourStyle}>
								<ListItem>
									<span className="icon"><i className="far fa-alarm-clock"></i></span>
									<span>Item text 01</span>
								</ListItem>
								<ListItem>
									<span className="icon"><i className="far fa-crown"></i></span>
									<span>Item text 02</span>
								</ListItem>
								<ListItem>
									<span className="icon"><i className="far fa-database"></i></span>
									<span>Item text 03</span>
								</ListItem>
								<ListItem>
									<span className="icon"><i className="fab fa-rebel"></i></span>
									<span>Item text 04</span>
								</ListItem>
								<ListItem>
									<span className="icon"><i className="far fa-cart-plus"></i></span>
									<span>Item text 05</span>
								</ListItem>
								<ListItem>
									<span className="icon"><i className="far fa-crosshairs"></i></span>
									<span>Item text 06</span>
								</ListItem>
							</List>
						</ListGroupWrap>
					</Col>
					<Col lg={4} md={6}>
						<ListGroupWrap>
							<Heading {...HeadingStyle}>Automatic Numbered List</Heading>
							<List {...ListFiveStyle}>
								<ListItem>Item text 01</ListItem>
								<ListItem>Item text 02</ListItem>
								<ListItem>Item text 03</ListItem>
								<ListItem>Item text 04</ListItem>
								<ListItem>Item text 05</ListItem>
								<ListItem>Item text 06</ListItem>
							</List>
						</ListGroupWrap>
					</Col>
					<Col lg={4} md={6}>
						<ListGroupWrap>
							<Heading {...HeadingStyle}>Roman Numbered List</Heading>
							<List {...ListSixStyle}>
								<ListItem>Item text 01</ListItem>
								<ListItem>Item text 02</ListItem>
								<ListItem>Item text 03</ListItem>
								<ListItem>Item text 04</ListItem>
								<ListItem>Item text 05</ListItem>
								<ListItem>Item text 06</ListItem>
							</List>
						</ListGroupWrap>
					</Col>
				</Row>
			</Container>
		</SectionWrap>
	)
}

Section.propTypes = {
	HeadingStyle: PropTypes.object
}

Section.defaultProps = {
	HeadingStyle: {
		as: 'h5',
		mb: '30px'
	},
	ListOneStyle: {
		layout: 'separator'
	},
	ListTwoStyle: {
		layout: 'check'
	},
	ListThreeStyle: {
		layout: 'circle'
	},
	ListFourStyle: {
		layout: 'icon'
	},
	ListFiveStyle: {
		as: 'ol',
		layout: 'order-list'
	},
	ListSixStyle: {
		as: 'ol',
		liststyle: 'upper-roman',
		layout: 'order-list'
	}
}


export default Section;