import React from "react";
// import Typical from 'react-typical'
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css'
import { Container, Row, Col } from "@ui/wrapper";
import { SectionWrap, TypedTextWrap } from "./style";

const TypedText = () => {
	return (
		<SectionWrap>
			<Container>
				<Row>
					<Col lg={12}>
						<TypedTextWrap>
							<span className="not-typical">We are a creative studio <br /> focused on </span>
							<Typed
								strings={['graphic', 'web', 'interactive']}
								typeSpeed={40}
								backSpeed={50}
								loop
							/>
							<span className="not-typical">design</span>
						</TypedTextWrap>
					</Col>
				</Row>
			</Container>
		</SectionWrap>
	)
}

export default TypedText
