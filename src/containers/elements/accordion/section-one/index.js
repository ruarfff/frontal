import React, { useState } from "react";
import PropTypes from "prop-types";
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from "react-accessible-accordion";
import AccordionWrap from "@ui/accordion";
import Heading from "@ui/heading";
import { Container, Row, Col } from "@ui/wrapper";
import { SectionWrap } from './section.style'

const AccordionArea = ({ accordion, sectionStyle, headingStyle, ...props }) => {
	const [data] = useState([
		{
			id: 0,
			title: "How can we help your business?",
			content: "Through the collaboration with customers in discussing needs and demand, we're able to attain mutual understanding, gain customer trust to offer appropriate advice, and bring about suggestions on suitable technology to transform your business."
		},
		{
			id: 1,
			title: "What are the advantages of Mitech?",
			content: "Mitech takes into consideration every little detail to make sure the system run smoothly and responsively. Mitech employs a new technique called Minified Technology for securing customers' database & building up highly confidential firewalls."
		},
		{
			id: 2,
			title: "How working process is simplified?",
			content: "We reduce redundant complex calculations and lengthy erroneous code texts with simpler ones to ensure Mitech would run seamlessly and the design is reserved in its best form when viewed from a wide range of mobile devices & browsers."
		},
		{
			id: 3,
			title: "Product Engineering & Services",
			content: "Our service offerings to enhance customer experience throughout the product lifecycle includes – test and repair, service management, and end-to-end warranty management."
		}
	]);

	return (
		<SectionWrap>
			<Container>
				<Row>
					<Col lg={8} ml="auto" mr="auto">
						<Heading {...headingStyle}>Accordion Style 01</Heading>
						<AccordionWrap>
							<Accordion allowZeroExpanded preExpanded={[data[0].id]}>
								{
									data.map((el, index) => {
										return (
											<AccordionItem id={el.id} key={index}>
												<AccordionItemHeading>
													<AccordionItemButton>
														{el.title}
													</AccordionItemButton>
												</AccordionItemHeading>
												<AccordionItemPanel>
													<p>{el.content}</p>
												</AccordionItemPanel>
											</AccordionItem>
										)
									})
								}
							</Accordion>
						</AccordionWrap>
					</Col>
				</Row>
			</Container>
		</SectionWrap>
	)
}

AccordionArea.propTypes = {
	headingStyle: PropTypes.object
}

AccordionArea.defaultProps = {
	headingStyle: {
		as: 'h4',
		mb: '37px'
	}
}

export default AccordionArea
