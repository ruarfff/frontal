import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import Counter from "@components/counter/layout-three";
import { SectionWrap, HeaderWrap } from './section.style'

const Section = ({ markHeading, headingStyle }) => {
	const funFactQueryData = useStaticQuery(graphql`
        query GloablFunFactThreeQuery {
            allFunFactJson {
                edges {
                    node {
                        count
                        title
                    }
                }
            }
        }
    `);
	const data = funFactQueryData.allFunFactJson.edges;
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
							{data.map((item, i) => (
								<Col sm={6} key={`fun-fact-${i}`}>
									<Counter
										text={item.node.title}
										countTo={item.node.count}
									/>
								</Col>
							))}
						</Row>
					</Col>
				</Row>
			</Container>
		</SectionWrap>
	)
}

Section.propTypes = {
	markHeading: PropTypes.object,
	headingStyle: PropTypes.object
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