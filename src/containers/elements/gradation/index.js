import React from "react";
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import Gradation from "@ui/gradation";
import { gradations } from "./data";
import { SectitonWrap, GradationRow, SectionTitleWrap, StepWrap } from "./style";

const GradationArea = ({ titleStyle, subtitleStyle }) => {
	return (
		<SectitonWrap>
			<Container>
				<Row>
					<Col md={6}>
						<SectionTitleWrap>
							<Heading {...subtitleStyle}>HOW WE WORKS</Heading>
							<Heading {...titleStyle}>How it helps <span>your <br /> business succeed</span></Heading>
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
