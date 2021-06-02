import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { Container, Row, Col } from "@ui/wrapper";
import Heading from "@ui/heading";
import Button from "@ui/button";
import { SectionWrap, SectionTitle, GalleryWrap, GalleryGrid, GalleryItem, GalleryOverlay, GalleryOverlayIcon } from "./style";

const JobsArea = ({ headingStyle, btnStyle }) => {
	const getJobsData = useStaticQuery(graphql`
        query GET_OFFICE_VIEW_DATA {
            careersJson(id: {eq: "our-office-views"}) {
                title
                link
                images {
                    childImageSharp {
						gatsbyImageData(
							layout: CONSTRAINED
							width: 960
							height: 960
							placeholder: TRACED_SVG
							formats: WEBP
							quality: 100
						)
                    }
                }
            }
        }     
    `);
	const { careersJson: { title, link, images } } = getJobsData
	const [isOpen, setIsOpen] = useState(false)
	const [photoIndex, setPhotoIndex] = useState(0);
	const onClickHandler = (e, i) => {
		setIsOpen(true)
		setPhotoIndex(i)
	}
	return (
		<SectionWrap>
			<Container>
				<Row justify="center">
					<Col lg={7}>
						<SectionTitle>
							<Heading {...headingStyle}>{title}</Heading>
							<Button {...btnStyle} to={link} icon="far fa-long-arrow-right">View all team</Button>
						</SectionTitle>
					</Col>
				</Row>
				<Row>
					<Col lg={12}>
						<GalleryWrap>
							{images.map((image, i) => (
								<GalleryGrid key={`gallery-${i}`}>
									<GalleryItem>
										<GatsbyImage image={getImage(image)} alt="gallery" />
										<GalleryOverlay />
										<GalleryOverlayIcon onClick={(e) => onClickHandler(e, i)}>
											<i className="icon far fa-search"></i>
										</GalleryOverlayIcon>
									</GalleryItem>
								</GalleryGrid>
							))}
							{isOpen && (
								<Lightbox
									mainSrc={images[photoIndex].childImageSharp.gatsbyImageData.images.fallback.src}
									nextSrc={images[(photoIndex + 1) % images.length]}
									prevSrc={images[(photoIndex + images.length - 1) % images.length]}
									onCloseRequest={() => setIsOpen(false)}
									onMovePrevRequest={() =>
										setPhotoIndex((photoIndex + images.length - 1) % images.length)
									}
									onMoveNextRequest={() =>
										setPhotoIndex((photoIndex + 1) % images.length)
									}
								/>
							)}
						</GalleryWrap>
					</Col>
				</Row>
			</Container>
		</SectionWrap>
	)
}

JobsArea.defaultProps = {
	headingStyle: {
		as: 'h3',
		mb: '15px'
	},
	btnStyle: {
		varient: "texted",
		fontSize: '18px',
		hover: "false",
		border: {
			bottom: {
				width: '1px'
			}
		}
	}
}

export default JobsArea
