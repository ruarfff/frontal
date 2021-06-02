import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import parse from "html-react-parser";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Heading from "@ui/heading";
import Text from "@ui/text";
import Button from "@ui/button";
import { BlogLayoutWrap, ImageWrap, BlogLayoutTextWrap, ButtonWrap } from './blog-layout.style'

const BlogLayout = ({ titleStyle, textStyle }) => {
	const blogData = useStaticQuery(graphql`
        query BlogQuery {
            landingJson(id: {eq: "blogLayout"}) {
                title
                path
                desc
                id
                image {
                    childImageSharp {
						gatsbyImageData(
							layout: CONSTRAINED
							width: 922
							height: 760
							formats: WEBP
							placeholder: TRACED_SVG
							quality: 100
						)
                    }
                }
            }
        }      
    `);
	const data = blogData.landingJson;

	return (
		<BlogLayoutWrap>
			<Container fluid>
				<Row className="align-items-center">
					<Col lg={6}>
						<ImageWrap>
							<GatsbyImage
								alt={data.title}
								image={getImage(data.image)}
							/>
						</ImageWrap>
					</Col>
					<Col lg={6}>
						<BlogLayoutTextWrap>
							<Heading {...titleStyle}>{parse(data.title)}</Heading>
							<Text {...textStyle}>{parse(data.desc)}</Text>
							<ButtonWrap>
								<Button as={Link} to={data.path}>Find out more</Button>
							</ButtonWrap>
						</BlogLayoutTextWrap>
					</Col>
				</Row>
			</Container>
		</BlogLayoutWrap>
	)
}

BlogLayout.propTypes = {
	titleStyle: PropTypes.object
}

BlogLayout.defaultProps = {
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

export default BlogLayout;