import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import parse from "html-react-parser";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import Gradation from "@ui/gradation";
import { SectitonWrap, GradationRow, SectionTitleWrap, StepWrap } from './gradation-area.style'

const GradationArea = ({ titleStyle, subtitleStyle }) => {
	const gradationData = useStaticQuery(graphql`
        query ServicesgradationQuery {
            indexServicesJson(id: {eq: "services-gradation-content"}) {
                title
                subtitle
                gradations {
                    id
                    title
                    desc
                    path
                }
            }
        }
    `);
	const { title, subtitle, gradations } = gradationData.indexServicesJson;
	return (
		<SectitonWrap>
			<Container>
				<Row>
					<Col md={6}>
						<SectionTitleWrap>
							{subtitle && <Heading {...subtitleStyle}>{subtitle}</Heading>}
							{title && <Heading {...titleStyle}>{parse(title)}</Heading>}
						</SectionTitleWrap>
					</Col>
					<Col md={6}>
						<StepWrap>
							<h3><mark>{`0${gradations.length}`}</mark>Steps</h3>
						</StepWrap>
					</Col>
				</Row>
				<Row>
					<Col lg={12}>
						<GradationRow>
							{gradations.map((gradation, i) => (
								<Gradation
									key={gradation.id}
									number={i + 1}
									isLast={i === gradations.length - 1}
									title={gradation.title}
									desc={gradation.desc}
									path={gradation.path}
								/>
							))}
						</GradationRow>
					</Col>
				</Row>
			</Container>
		</SectitonWrap>
	)
}

GradationArea.defaultProps = {
	titleStyle: {
		as: "h4",
		child: {
			color: 'primary'
		}
	},
	subtitleStyle: {
		as: "h6",
		color: "#333",
		fontSize: '14px',
		letterspacing: '3px',
		texttransform: 'uppercase',
		lineHeight: 1.43,
		mt: '-5px',
		mb: '20px'
	}
}

export default GradationArea
