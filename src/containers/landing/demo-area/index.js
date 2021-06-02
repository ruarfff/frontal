import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "@ui/section-title";
import Demo from "@components/demo";
import { DemoAreaWrap } from './demo-area.style'

const DemoArea = ({ sectionTitle }) => {
	const demoData = useStaticQuery(graphql`
    query DemoQuery {
        landingJson(id: {eq: "demos"}) {
          items {
            id
            title
            path
            image {
				childImageSharp {
					gatsbyImageData(
						layout: CONSTRAINED
						width: 480
						height: 338
						placeholder: TRACED_SVG
						formats: WEBP
						quality: 100
					)
				}
            }
          }
        }
    }  
    `);

	const demos = demoData.landingJson.items;


	return (
		<DemoAreaWrap id="section-demos">
			<Container>
				<Row>
					<Col lg={12}>
						<SectionTitle
							{...sectionTitle}
							subtitle="Start with a demo"
							title="<span>06 Unique Homepages </span> for Multiple Purposes."
						/>
					</Col>
				</Row>
				<Row>
					{demos.map(demo => {
						return (
							<Col lg={4} md={6} key={demo.id}>
								<Demo content={demo} />
							</Col>
						)
					})}
				</Row>

			</Container>
		</DemoAreaWrap>
	)
}

DemoArea.propTypes = {
	sectionTitle: PropTypes.object
}

DemoArea.defaultProps = {
	sectionTitle: {
		mb: '40px'
	}
}

export default DemoArea;