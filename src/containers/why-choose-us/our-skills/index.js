import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import parse from "html-react-parser";
import Heading from "@ui/heading";
import Text from "@ui/text";
import ProgressBar from "@ui/progress-bar/layout-one";
import { Container, Row, Col } from "@ui/wrapper";
import { SectionWrap, SectionTitle, LeftBox, RightBox } from "./style";

const OurSkills = props => {
	const getSkillData = useStaticQuery(graphql`
        query GET_SKILL_DATA {
            pageIntro: whyChooseUsJson(id: {eq: "why-choose-page-intro"}) {
                title
                desc
                heading
                text
            }
            skills: whyChooseUsJson(id: {eq: "our-skills"}) {
                skills {
                    title
                    value
                }
            }
        }
    `)
	const { pageIntro: { title, desc, heading, text }, skills: { skills } } = getSkillData
	const { titleStyle, descStyle, headingStyle, textStyle } = props;
	return (
		<SectionWrap>
			<Container>
				<Row>
					<Col lg={12}>
						<SectionTitle>
							{title && <Heading {...titleStyle}>{parse(title)}</Heading>}
							{desc && <Text {...descStyle}>{desc}</Text>}
						</SectionTitle>
					</Col>
				</Row>
				<Row>
					<Col lg={{ span: 4, offset: 1 }}>
						<LeftBox>
							{heading && <Heading {...headingStyle}>{parse(heading)}</Heading>}
							{text && <Heading {...textStyle}>{parse(text)}</Heading>}
						</LeftBox>
					</Col>
					<Col lg={{ span: 6, offset: 1 }}>
						<RightBox>
							{skills && skills.map((skill, i) => (
								<ProgressBar key={`skill-${i}`} title={skill.title} value={skill.value} />
							))}
						</RightBox>
					</Col>
				</Row>
			</Container>
		</SectionWrap>
	)
}
OurSkills.propTypes = {
	titleStyle: PropTypes.object,
	descStyle: PropTypes.object,
	headingStyle: PropTypes.object,
	textStyle: PropTypes.object
}

OurSkills.defaultProps = {
	titleStyle: {
		as: 'h3',
		mb: '20px',
		child: {
			color: 'primary'
		}
	},
	descStyle: {
		maxwidth: '760px',
		m: 'auto'
	},
	headingStyle: {
		as: "h3",
		layout: "highlight",
		maxwidth: "330px",
		mb: "24px",
		responsive: {
			medium: {
				maxwidth: "100%"
			}
		}
	},
	textStyle: {
		as: "h4",
		fontSize: "38px",
		child: {
			color: 'primary'
		},
		responsive: {
			medium: {
				fontSize: "28px"
			},
			small: {
				fontSize: "24px"
			}
		}
	},
}


export default OurSkills
