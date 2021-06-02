import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "@ui/wrapper";
import Timeline from "@ui/timeline";
import { SectionWrap } from "./style";

const HistoryArea = () => {
	const getHistories = useStaticQuery(graphql`
        query GET_HISTORY_DATA {
            ourHistoryJson(id: {eq: "our-history"}) {
                histories {
                    year
                    title
                    desc
                    image {
                        childImageSharp {
							gatsbyImageData(
								layout: CONSTRAINED
								width: 500
								height: 350
								placeholder: TRACED_SVG
								formats: WEBP
								quality: 100
							)
                        }
                    }
                }
            }
        }
    `)
	const { ourHistoryJson: { histories } } = getHistories
	return (
		<SectionWrap>
			<Container>
				<Row>
					<Col lg={12}>
						<Timeline items={histories} />
					</Col>
				</Row>
			</Container>
		</SectionWrap>
	)
}

export default HistoryArea
