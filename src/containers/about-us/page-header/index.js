import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge"
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import { PageHeaderWrap } from './page-header.style'

const PageHeader = ({ titleStyle, descStyle }) => {
	const PageHeaderData = useStaticQuery(graphql`
        query AboutPageHeaderQuery {
            aboutUsJson(id: {eq: "about-page-header-data"}) {
                title
                desc
                bg_image {
                    childImageSharp {
					    gatsbyImageData(
							layout: FULL_WIDTH
							placeholder: TRACED_SVG
							formats: WEBP
							quality: 100
						)
                    }
                }
            }
        } 
    `);
	const { title, desc, bg_image } = PageHeaderData.aboutUsJson;
	const bgConvImg = convertToBgImage(getImage(bg_image))
	return (
		<PageHeaderWrap {...bgConvImg}>
			<Container>
				<Row textalign="center">
					<Col lg={8} ml="auto" mr="auto">
						{title && <Heading {...titleStyle}>{title}</Heading>}
						{desc && <Heading {...descStyle}>{desc}</Heading>}
					</Col>
				</Row>
			</Container>
		</PageHeaderWrap>
	)
}

PageHeader.propTypes = {
	descStyle: PropTypes.object,
	titleStyle: PropTypes.object
}

PageHeader.defaultProps = {
	titleStyle: {
		as: 'h1',
		color: "#fff",
		mb: '15px'
	},
	descStyle: {
		as: "h5",
		color: "#fff",
		fontweight: 400
	}
}

export default PageHeader;