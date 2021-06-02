import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import parse from "html-react-parser";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import Text from "@ui/text";
import Button from '@ui/button'
import SectionTitle from '@ui/section-title'
import { AboutWrapper, LeftBox, RightBox } from './about-area.style'

const AboutDesc = ({ sectionTitleStyle, headingStyle, textStyle, descStyle, btnStyle }) => {
	const AboutDescData = useStaticQuery(graphql`
        query AboutPageDescQuery {
            aboutUsJson(id: {eq: "about-page-intro"}) {
                section_title {
                    title
                    subtitle
                }
                heading
                text
                desc
                path
            }
        } 
    `);
	const { section_title: { title, subtitle }, heading, text, desc, path } = AboutDescData.aboutUsJson;
	return (
		<AboutWrapper>
			<Container>
				<Row>
					<Col lg={7} md={9} ml="auto" mr="auto">
						<SectionTitle
							{...sectionTitleStyle}
							title={title}
							subtitle={subtitle}
						/>
					</Col>
				</Row>
				<Row>
					<Col lg={{ span: 4, offset: 1 }}>
						<LeftBox>
							{heading && <Heading {...headingStyle}>{parse(heading)}</Heading>}
							{text && <Heading {...textStyle}>{parse(text)}</Heading>}
						</LeftBox>
					</Col>
					<Col lg={{ span: 5, offset: 1 }}>
						<RightBox>
							{desc && <Text {...descStyle}>{parse(desc)}</Text>}
							{path && <Button {...btnStyle} to={path}>Discover More</Button>}
						</RightBox>
					</Col>
				</Row>
			</Container>
		</AboutWrapper>
	)
}

AboutDesc.propTypes = {
	sectionStyle: PropTypes.object,
	sectionTitleStyle: PropTypes.object,
	headingStyle: PropTypes.object,
	textStyle: PropTypes.object,
	descStyle: PropTypes.object,
}

AboutDesc.defaultProps = {
	sectionTitleStyle: {
		mb: '70px',
		responsive: {
			small: {
				mb: '30px'
			}
		}
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
		fontSize: "20px"
	},
	descStyle: {
		fontSize: "18px",
		lineHeight: 1.67,
		mb: "23px"
	},
	btnStyle: {
		varient: "texted",
		iconname: "far fa-long-arrow-right",
		hover: "false"
	}
}

export default AboutDesc;