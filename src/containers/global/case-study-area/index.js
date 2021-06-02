import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Section, { Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import CaseStudyBox from "@components/box-large-image/layout-two";

const CaseStudiesArea = (props) => {
	const caseStudyData = useStaticQuery(graphql`
        query {
            allCaseStudiesJson {
                edges {
                    node {
                        fields{
                            slug
                        }
                        id
                        title
                        category
                        excerpt
                        image{
                            childImageSharp {
								gatsbyImageData(
									layout: CONSTRAINED
									width: 480
									height: 298
									placeholder: TRACED_SVG
									formats: WEBP
									quality: 100
								)
                            }
                        }
                    }
                }
            }
        }
    `)
	const caseStudies = caseStudyData.allCaseStudiesJson.edges;
	const { sectionStyle, headingStyle, caseStudyStyles } = props;
	return (
		<Section {...sectionStyle}>
			<Row>
				<Col>
					<Heading {...headingStyle}>Proud projects that <span>make us stand out</span></Heading>
				</Col>
			</Row>
			<Row>
				{caseStudies.map(caseStudy => (
					<Col lg={4} md={6} mb="30px" key={caseStudy.node.id}>
						<CaseStudyBox
							{...caseStudyStyles}
							imageSrc={caseStudy.node.image}
							title={caseStudy.node.title}
							category={caseStudy.node.category}
							desc={caseStudy.node.excerpt}
							path={`/case-study/${caseStudy.node.fields.slug}`}
							btnText="View case study"
						/>
					</Col>
				))}
			</Row>
		</Section>
	)
}


CaseStudiesArea.propTypes = {
	sectionStyle: PropTypes.object,
	headingStyle: PropTypes.object,
	caseStudyStyles: PropTypes.object
}

CaseStudiesArea.defaultProps = {
	sectionStyle: {
		pt: '89px',
		pb: '70px',
		responsive: {
			medium: {
				pt: '72px',
				pb: '50px'
			},
			small: {
				pt: '53px',
				pb: '30px'
			}
		}
	},
	headingStyle: {
		as: "h3",
		mb: '40px',
		textalign: "center",
		child: {
			color: "primary"
		},
		responsive: {
			small: {
				mb: '30px'
			}
		}
	},
	caseStudyStyles: {
		contentBoxStyle: {
			pt: '25px',
			pl: '26px',
			pr: '26px',
			textalign: 'left'
		},
		headingStyle: {
			as: 'h6',
			fontweight: 600,
			mb: '2px'
		},
		descStyle: {
			mb: 0,
			mt: '13px'
		}
	}
}

export default CaseStudiesArea;