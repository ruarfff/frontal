import React from "react";
import { useStaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Container, Row, Col } from "@ui/wrapper";
import SectionTitle from "@ui/section-title";
import Swiper from "@ui/swiper";
import { SectionWrap, CaseInfo, CaseTitle, CaseCat, CaseText, CaseImage } from './case-study-area.style'

const CaseStudyArea = (props) => {
	const caseData = useStaticQuery(graphql`
        query ServiceCaseStudyQuery {
            indexServicesJson(id: {eq: "services-case-contnet"}) {
                title
                subtitle
            }
            allCaseStudiesJson(limit: 2) {
                edges {
                    node {
                        title
                        id
                        fields {
                            slug
                        }
                        category
                        excerpt
                        slide_image {
                            childImageSharp {
								gatsbyImageData(
									layout: CONSTRAINED
									width: 670
									height: 454
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
	const { title, subtitle } = caseData.indexServicesJson;
	const caseStudies = caseData.allCaseStudiesJson.edges;
	const { sectionTitleStyle, sliderSettings } = props;
	return (
		<SectionWrap>
			<Container>
				<Row>
					<Col lg={12}>
						<SectionTitle
							{...sectionTitleStyle}
							title={title}
							subtitle={subtitle}
						/>
					</Col>
				</Row>
				<Swiper settings={{ ...sliderSettings }}>
					{caseStudies.map(caseStudy => (
						<div className="item" key={caseStudy.node.id}>
							<Row>
								<Col lg={{ span: 6, order: 1 }} xs={{ span: 12, order: 2 }}>
									<CaseInfo>
										{caseStudy.node.title && <CaseTitle><Link to={`/case-study/${caseStudy.node.fields.slug}`}>{caseStudy.node.title}</Link></CaseTitle>}
										{caseStudy.node.category && <CaseCat>{caseStudy.node.category}</CaseCat>}
										{caseStudy.node.excerpt && <CaseText>{caseStudy.node.excerpt}</CaseText>}
									</CaseInfo>
								</Col>
								<Col lg={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }}>
									<CaseImage>
										<GatsbyImage image={getImage(caseStudy.node.slide_image)} alt={caseStudy.node.title} />
									</CaseImage>
								</Col>
							</Row>
						</div>
					))}
				</Swiper>
			</Container>
		</SectionWrap>
	)
}

CaseStudyArea.defaultProps = {
	sectionTitleStyle: {
		mb: '60px',
		responsive: {
			small: {
				mb: '47px'
			}
		}
	},
	sliderSettings: {
		slidesPerView: 1,
		pagination: false
	}
}

export default CaseStudyArea
