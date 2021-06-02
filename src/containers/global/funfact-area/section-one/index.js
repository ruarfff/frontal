import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Section, { Row, Col } from "@ui/wrapper";
import Counter from "@components/counter/layout-one";

const FunFactArea = ({ sectionStyle, counterStyle }) => {
	const funFactQueryData = useStaticQuery(graphql`
        query GloablFunFactQuery {
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
		<Section {...sectionStyle}>
			<Row>
				{data.map((item, i) => (
					<Col md={3} sm={6} key={`fun-fact-${i}`}>
						<Counter
							{...counterStyle}
							text={item.node.title}
							countTo={item.node.count}
						/>
					</Col>
				))}
			</Row>
		</Section>
	)
}

FunFactArea.propTypes = {
	sectionStyle: PropTypes.object
}

FunFactArea.defaultProps = {
	sectionStyle: {
		pt: '59px',
		pb: '29px',
		bgColor: '#086AD8'
	},
	counterStyle: {
		wrapperStyle: {
			mb: '30px'
		},
		countToStyle: {
			fontSize: '56px',
			fontweight: 700,
			color: '#fff',
			lineHeight: 1,
			mb: '20px'
		},
		textStyle: {
			color: '#ffffffb3'
		}
	}
}

export default FunFactArea;