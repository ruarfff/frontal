import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import parse from "html-react-parser";
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import Heading from "@ui/heading";
import Text from "@ui/text";
import Button from "@ui/button";
import { HeaderLayoutWrap, ImageWrap, HeaderLayoutTextWrap, ButtonWrap } from './header-layout.style'

const HeaderLayout = ({ titleStyle, textStyle }) => {
	const headerData = useStaticQuery(graphql`
        query HeaderQuery {
            landingJson(id: {eq: "headerLayout"}) {
                title
                path
                desc
                id
                image {
                    childImageSharp {
						gatsbyImageData(
							layout: CONSTRAINED
							width: 726
							height: 435
							formats: WEBP
							placeholder: TRACED_SVG
							quality: 100
						)
                    }
                }
            }
            file(relativePath: {eq: "images/bg/mitech-landing-header-preview-bg.png"}) {
                childImageSharp {
					gatsbyImageData(
						layout: CONSTRAINED
						width: 656
						height: 595
						formats: WEBP
						placeholder: TRACED_SVG
						quality: 100
					)
                }
            } 
        }
    `);
	const data = headerData.landingJson;
	const bgImage = convertToBgImage(getImage(headerData.file))

	return (
		<HeaderLayoutWrap {...bgImage}>
			<Container fluid>
				<Row className="align-items-center">
					<Col lg={6}>
						<HeaderLayoutTextWrap>
							<Heading {...titleStyle}>{parse(data.title)}</Heading>
							<Text {...textStyle}>{parse(data.desc)}</Text>
							<ButtonWrap>
								<Button as={Link} to={data.path}>Find out more</Button>
							</ButtonWrap>
						</HeaderLayoutTextWrap>
					</Col>
					<Col lg={6}>
						<ImageWrap>
							<GatsbyImage
								image={getImage(data.image)}
								alt={data.title}
							/>
						</ImageWrap>
					</Col>
				</Row>
			</Container>
		</HeaderLayoutWrap>
	)
}

HeaderLayout.propTypes = {
	titleStyle: PropTypes.object,
	textStyle: PropTypes.object
}

HeaderLayout.defaultProps = {
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

export default HeaderLayout;