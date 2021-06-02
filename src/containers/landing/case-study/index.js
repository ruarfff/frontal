import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import parse from "html-react-parser";
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Heading from "@ui/heading";
import Text from "@ui/text";
import Button from "@ui/button";
import { CaseStudyWrap, ImageWrap, CaseStudyTextWrap, ButtonWrap } from './case-study.style'

const CaseStudy = ({ titleStyle, textStyle }) => {
	const caseData = useStaticQuery(graphql`
    query CaseQuery {
        landingJson(id: {eq: "caseStudy"}) {
			title
			path
			desc
			image {
				childImageSharp {
					gatsbyImageData(
						layout: CONSTRAINED
						width: 922
						height: 760
						formats: WEBP
						placeholder: BLURRED
						quality: 100
					)
				}
			}
        }
    }      
    `);
	const data = caseData.landingJson;

	return (
		<CaseStudyWrap>
			<Container fluid>
				<Row className="align-items-center">
					<Col lg={6}>
						<ImageWrap>
							<GatsbyImage image={getImage(data.image)} alt={data.title} />
						</ImageWrap>
					</Col>
					<Col lg={6}>
						<CaseStudyTextWrap>
							<Heading {...titleStyle}>{parse(data.title)}</Heading>
							<Text {...textStyle}>{parse(data.desc)}</Text>
							<ButtonWrap>
								<Button as={Link} to={data.path}>Find out more</Button>
							</ButtonWrap>
						</CaseStudyTextWrap>
					</Col>
				</Row>
			</Container>
		</CaseStudyWrap>
	)
}

CaseStudy.propTypes = {
	titleStyle: PropTypes.object
}

CaseStudy.defaultProps = {
	titleStyle: {
		as: "h3",
		child: {
			color: 'primary'
		}
	},
	textStyle: {
		mt: '30px'
	}
}

export default CaseStudy;