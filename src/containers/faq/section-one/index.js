import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from "react-accessible-accordion";
import AccordionWrap from "@ui/accordion";
import SectionTitle from "@ui/section-title";
import PopupVideo from "@ui/popup-video/layout-one";
import { Container, Row, Col } from "@ui/wrapper";
import { SectionWrap } from "./style";

const FaqSection = ({ accordionStyle }) => {
	const getFaqData = useStaticQuery(graphql`
        query GET_FAQ_SECTION_ONE_DATA {
            intro: faqJson(id: {eq: "section-one-itro"}) {
                title
            }
            faq: faqJson(id: {eq: "faq"}) {
                items {
                    id
                    question
                    answer
                }
            }
            video: faqJson(id: {eq: "faq-video"}) {
                image {
                    childImageSharp {
						gatsbyImageData(
							layout: CONSTRAINED
							width: 570
							height: 350
							placeholder: TRACED_SVG
							formats: WEBP
							quality: 100
						)
                    }
                }
                video_link
            }
        }
    `)
	const { intro: { title }, faq: { items: faqs }, video: { image, video_link } } = getFaqData
	return (
		<SectionWrap>
			<Container>
				<Row>
					<Col lg={12}>
						<SectionTitle
							mb="44px"
							title={title}
						/>
					</Col>
				</Row>
				<Row>
					<Col lg={6}>
						<AccordionWrap {...accordionStyle}>
							<Accordion allowZeroExpanded preExpanded={[0]}>
								{
									faqs.map((el, index) => {
										return (
											<AccordionItem id={el.id} key={index}>
												<AccordionItemHeading>
													<AccordionItemButton>
														{el.question}
													</AccordionItemButton>
												</AccordionItemHeading>
												<AccordionItemPanel>
													<p>{el.answer}</p>
												</AccordionItemPanel>
											</AccordionItem>
										)
									})
								}
							</Accordion>
						</AccordionWrap>
					</Col>
					<Col lg={6}>
						<PopupVideo
							image={image}
							video_link={video_link}
						/>
					</Col>
				</Row>
			</Container>
		</SectionWrap>
	)
}

FaqSection.defaultProps = {
	accordionStyle: {
		responsive: {
			medium: {
				mb: '50px'
			}
		}
	}
}

export default FaqSection
