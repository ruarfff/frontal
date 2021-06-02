import BoxIcon from "@components/box-icon/layout-three";
import Seo from "@components/seo";
import Cta from "@containers/global/cta-area/section-one";
import Layout from "@layout";
import Footer from "@layout/footer/footer-one";
import Header from "@layout/header";
import AccordionWrap from "@ui/accordion";
import Heading from "@ui/heading";
import ModalVideo from "@ui/modal-video";
import Text from "@ui/text";
import VideoButton from "@ui/video-button";
import { Box, Col, Container, Row } from "@ui/wrapper";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import parse from "html-react-parser";
import PropTypes from "prop-types";
import React, { useState } from "react";
import {
	Accordion,
	AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel
} from "react-accessible-accordion";
import { BannerArea, BannerTextWrap, FaqArea, FeatureArea, IntroArea, VideoBoxWrap, VideoBtnWrap } from './service-template.style';

const ServiceTemplate = ({ data, location, ...restProps }) => {
	const pageData = data.itServicesJson;
	let bannerImg;
	if (pageData.banner_image) {
		bannerImg = convertToBgImage(getImage(pageData.banner_image));
	}
	const {
		titleStyle,
		taglineStyle,
		introTextStyles: { leftHeading, rightHeading, rightText },
		featureStyels: { featureTitle } } = restProps;

	const [videoOpen, setVideoOpen] = useState(false);

	if (pageData.video) {
		var { video_link } = pageData.video;
		var video_arr = video_link.split('=', -1);
		var video_id = video_arr[1];
	}
	const modalVideoOpen = () => {
		setVideoOpen(true)
	}

	const modalVideoClose = () => {
		setVideoOpen(false)
	}
	return (
		<Layout location={location}>
			<Seo title={pageData.title} />
			<Header />
			<main className="site-wrapper-reveal">
				{(pageData.title || pageData.tagline) && (
					<BannerArea {...bannerImg}>
						<Container>
							<Row justify="center">
								<Col lg={8}>
									<BannerTextWrap>
										{pageData.title && <Heading {...titleStyle}>{pageData.title}</Heading>}
										{pageData.tagline && <Heading {...taglineStyle}>{pageData.tagline}</Heading>}
									</BannerTextWrap>
								</Col>
							</Row>
						</Container>
					</BannerArea>
				)}
				{pageData.introText && (
					<IntroArea>
						<Container>
							<Row>
								<Col lg={4}>
									<Heading {...leftHeading}>Learn More About Our <span> Success <br /> Stories</span></Heading>
								</Col>
								{pageData.introText && (
									<Col lg={{ span: 7, offset: 1 }}>
										<Box>
											{pageData.introText.heading && <Heading {...rightHeading}>{parse(pageData.introText.heading)}</Heading>}
											{pageData.introText.text && <Text {...rightText}>{parse(pageData.introText.text)}</Text>}
										</Box>
									</Col>
								)}
							</Row>
						</Container>
					</IntroArea>
				)}
				{(pageData.faq || pageData.video) && (
					<FaqArea>
						<Container>
							<Row>
								{pageData.faq && (
									<Col lg={6} pr="3rem">
										<AccordionWrap layout="two">
											<Accordion allowZeroExpanded preExpanded={[pageData.faq[0].id]}>
												{
													pageData.faq.map((el, index) => {
														return (
															<AccordionItem id={el.id} key={el.id}>
																<AccordionItemHeading>
																	<AccordionItemButton>
																		{el.title}
																	</AccordionItemButton>
																</AccordionItemHeading>
																<AccordionItemPanel>
																	<p>{el.desc}</p>
																</AccordionItemPanel>
															</AccordionItem>
														)
													})
												}
											</Accordion>
										</AccordionWrap>
									</Col>
								)}
								{pageData.video && (
									<Col lg={6}>
										<VideoBoxWrap>
											{pageData.video.preview_image && <GatsbyImage image={getImage(pageData.video.preview_image)} alt="Video preview" />}
											<VideoBtnWrap>
												<VideoButton skin="primary" onClick={modalVideoOpen} />
											</VideoBtnWrap>
										</VideoBoxWrap>
									</Col>
								)}
							</Row>
						</Container>
					</FaqArea>
				)}
				{pageData.features && (
					<FeatureArea>
						<Container>
							{pageData.features.title && (
								<Row>
									<Col col="12">
										<Heading {...featureTitle}>{pageData.features.title}</Heading>
									</Col>
								</Row>
							)}
							{pageData.features.items && (
								<Row>
									{pageData.features.items.map(feature => (
										<Col lg={6} key={feature.id}>
											<BoxIcon
												title={feature.title}
												icon={feature.icon}
												desc={feature.desc}
											/>
										</Col>
									))}
								</Row>
							)}
						</Container>
					</FeatureArea>
				)}
				<Cta />
			</main>
			<ModalVideo
				channel='youtube'
				videoId={video_id}
				isOpen={videoOpen}
				onClose={modalVideoClose}
			/>
			<Footer />
		</Layout>
	)
}

export const query = graphql`
    query($slug: String!){
        itServicesJson(fields: {slug: {eq: $slug}}){
            title
            id
            tagline
            banner_image{
                childImageSharp{
					gatsbyImageData(
						layout: FULL_WIDTH
						placeholder: TRACED_SVG
						formats: WEBP
						quality: 100
					)
                }
            }
            introText{
                heading
                text
            }
            faq{
                id
                title
                desc
            }
            video{
                preview_image{
                    childImageSharp {
						gatsbyImageData(
							layout: CONSTRAINED
							width: 570
							height: 350
							placeholder: TRACED_SVG
							formats: WEBP
							quality: 100
						)
                    }
                }
                video_link
            }
            features {
                title
                items {
                    id
                    title
                    icon{
                        childImageSharp {
							gatsbyImageData(
								layout: FIXED
								width: 60
								height: 60
								placeholder: TRACED_SVG
								formats: WEBP
								quality: 100
							)
                        }
                    }
                    desc
                }
            }
        }
    }
`;

ServiceTemplate.propTypes = {
	introTextStyles: PropTypes.object,
	titleStyle: PropTypes.object,
	taglineStyle: PropTypes.object,
	featureStyels: PropTypes.object
}

ServiceTemplate.defaultProps = {
	titleStyle: {
		as: 'h1',
		color: '#fff',
		mb: '15px'
	},
	taglineStyle: {
		as: 'h5',
		fontweight: 400,
		color: '#fff'
	},
	introTextStyles: {
		leftHeading: {
			as: 'h3',
			mt: '25px',
			fontSize: '38px',
			child: {
				color: 'primary'
			},
			responsive: {
				large: {
					fontSize: '30px'
				},
				medium: {
					mt: 0,
					mb: '20px',
					fontSize: '28px'
				},
				small: {
					fontSize: '24px'
				}
			}
		},
		rightHeading: {
			as: 'h5',
			position: 'relative',
			pl: '34px',
			lineheight: 1.67,
			fontweight: 800,
			layout: 'quote',
			child: {
				color: 'primary'
			},
		},
		rightText: {
			mt: '15px',
			fontSize: '18px',
			ml: '34px',
			color: '#696969'
		}
	},
	featureStyels: {
		featureTitle: {
			as: 'h3',
			textalign: 'center',
			mb: '20px'
		}
	}
}

export default ServiceTemplate;
