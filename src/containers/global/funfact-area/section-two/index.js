import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Counter from "@components/counter/layout-one";
import { Container } from "@ui/wrapper";
import { SectionWrap, GridWrap, Grid } from './section.style'

const FunFactArea = () => {
	const funFactQueryData = useStaticQuery(graphql`
        query GloablTwoFunFactQuery {
            allFunFactJson {
                edges {
                    node {
                        count
                        title
                        heading
                    }
                }
            }
        }
    `);

	const data = funFactQueryData.allFunFactJson.edges;
	return (
		<SectionWrap>
			<Container>
				<GridWrap>
					{data.map((item, i) => (
						<Grid key={`fun-fact-${i}`}>
							<Counter
								title={item.node.title}
								countTo={item.node.count}
								text={item.node.heading}
							/>
						</Grid>
					))}
				</GridWrap>
			</Container>
		</SectionWrap>
	)
}

export default FunFactArea;