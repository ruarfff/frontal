import PostNav from '@components/post-nav/layout-one';
import Seo from "@components/seo";
import Cta from "@containers/global/cta-area/section-one";
import TestimonialSection from '@containers/global/testimonial-area/section-one';
import Layout from "@layout";
import Footer from "@layout/footer/footer-one";
import Header from "@layout/header";
import AccordionWrap from "@ui/accordion";
import Heading from "@ui/heading";
import Icon from '@ui/icon';
import ModalVideo from "@ui/modal-video";
import Social, { SocialLink } from '@ui/social';
import Text from "@ui/text";
import VideoButton from "@ui/video-button";
import { Box, Col, Container, Row } from "@ui/wrapper";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import PropTypes from "prop-types";
import React, { useState } from "react";
import {
	Accordion,
	AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel
} from "react-accessible-accordion";
import {
	BannerArea,
	BannerTextWrap, ClientBox, FaqArea, MetaBox, NavigationArea,
	Navigtion, OverviewArea, ProblemArea,
	ProblemBox,
	ProblemTextBox,
	ResultArea, VideoBoxWrap,
	VideoBtnWrap
} from './case-study-template.style';

const CaseStudyTemplate = ({ data, pageContext: { next, previous }, location, ...restProps }) => {
	const pageData = data.caseStudiesJson;
	let bannerImg;
	if (pageData.banner_image) {
		bannerImg = convertToBgImage(getImage(pageData.banner_image));
	}
	const { overview, problem_solution, results, faq, video } = pageData;
	const {
		taglineStyle,
		overviewStyles: { overviewHeading, clientName, metaHeading },
		social,
		problemSolStyles: { problemHeading, problemIcon },
		resultStyles: { resultText } } = restProps;

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
			<Header />
			<Seo title={pageData.title} />
			<main className="site-wrapper-reveal">
				{(pageData.title || pageData.tagline) && (
					<BannerArea {...bannerImg}>
						<Container>
							<Row justify="center">
								<Col lg={10}>
									<BannerTextWrap>
										{pageData.logo && <GatsbyImage image={getImage(pageData.logo)} alt={pageData.title} />}
										{pageData.tagline && <Heading {...taglineStyle}>{pageData.tagline}</Heading>}
									</BannerTextWrap>
								</Col>
							</Row>
						</Container>
					</BannerArea>
				)}
				{overview && (
					<OverviewArea>
						<Container>
							<Row>
								<Col lg={12}>
									<Heading as="h3" mb="30px">Overview</Heading>
								</Col>
							</Row>
							<Row>
								<Col lg={5}>
									{overview.heading && <Heading {...overviewHeading}>{overview.heading}</Heading>}
									{overview.client && (
										<ClientBox>
											<Heading {...clientName}>{overview.client.name}</Heading>
											<Text>
												<Text as="span">/ {overview.client.designation}</Text>
												<Text as="span">- {overview.client.company}</Text>
											</Text>
										</ClientBox>
									)}
								</Col>
								<Col lg={7}>
									{overview.short_desc && <Text>{overview.short_desc}</Text>}
									{overview.tags && (
										<MetaBox>
											<Heading {...metaHeading}>Tags</Heading>
											<Box>
												{overview.tags.map((tag, i) => <span key={`tag-${i}`}>{tag}</span>)}
											</Box>
										</MetaBox>
									)}
									<MetaBox boxtype="share-box">
										<Heading {...metaHeading}>Share</Heading>
										<Social {...social}>
											<SocialLink path="https://www.twitter.com" title="twitter"><i className="fa fa-twitter"></i></SocialLink>
											<SocialLink path="https://www.facebook.com" title="facebook"><i className="fa fa-facebook"></i></SocialLink>
											<SocialLink path="https://www.linkedin.com" title="linkedin"><i className="fa fa-linkedin"></i></SocialLink>
										</Social>
									</MetaBox>
								</Col>
							</Row>
						</Container>
					</OverviewArea>
				)}
				{problem_solution && (
					<ProblemArea>
						<Container>
							<Row>
								<Col md={4}>
									<Heading as="h4" mb="50px">Requirements</Heading>
								</Col>
								<Col md={{ span: 7, offset: 1 }}>
									<Heading as="h4" mb="50px">Our solution</Heading>
								</Col>
							</Row>
							{problem_solution.map(item => (
								<ProblemBox key={item.id}>
									<Row>
										<Col md={4}>
											<ProblemTextBox>
												<Icon {...problemIcon} iconName="fal fa-long-arrow-right" />
												<Heading {...problemHeading}>{item.problem}</Heading>
											</ProblemTextBox>
										</Col>
										<Col md={{ span: 7, offset: 1 }}>
											<ProblemTextBox>
												<Icon {...problemIcon} iconName="fal fa-check" />
												<Text>{item.solution}</Text>
											</ProblemTextBox>
										</Col>
									</Row>
								</ProblemBox>
							))}
						</Container>
					</ProblemArea>
				)}
				{results && (
					<ResultArea>
						<Container>
							<Row>
								<Col lg={3}>
									<Heading>Results:</Heading>
								</Col>
								<Col lg={9}>
									<Text {...resultText}>{results}</Text>
								</Col>
							</Row>
						</Container>
					</ResultArea>
				)}
				{(faq || video) && (
					<FaqArea>
						<Container>
							<Row>
								{faq && (
									<Col lg={6} pr="3rem">
										<AccordionWrap layout="two">
											<Accordion allowZeroExpanded preExpanded={[faq[0].id]}>
												{
													faq.map((el, index) => {
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
								{video && (
									<Col lg={6}>
										<VideoBoxWrap>
											{video.preview_image && <GatsbyImage image={getImage(video.preview_image)} alt="Video preview" />}
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
				<TestimonialSection />
				<NavigationArea>
					<Container>
						<Row>
							<Col md={12}>
								<Navigtion>
									{previous && (
										<PostNav
											rel="prev"
											slug={previous.fields.slug}
											title={previous.title}
											image={previous.image.childImageSharp.fixed}
										/>
									)}
									{next && (
										<PostNav
											rel="next"
											slug={next.fields.slug}
											title={next.title}
											image={next.image.childImageSharp.fixed}
										/>
									)}
								</Navigtion>
							</Col>
						</Row>
					</Container>
				</NavigationArea>
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
        caseStudiesJson(fields: {slug: {eq: $slug}}){
            title
            tagline
            logo{
                childImageSharp{
					gatsbyImageData(
						layout: FIXED
						width: 83
						height: 108
						placeholder: TRACED_SVG
						formats: WEBP
						quality: 100
					)
                }
            }
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
            overview {
                heading
                short_desc
                tags
                client {
                    name
                    designation
                    company
                }
            }
            problem_solution {
                id
                problem
                solution
            }
            results
            faq {
                id
                title
                desc
            }
            video {
                video_link
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
            }
        }
    }
`;

CaseStudyTemplate.propTypes = {
	bannerStyle: PropTypes.object,
	taglineStyle: PropTypes.object,
	overviewStyles: PropTypes.object,
	social: PropTypes.object,
	problemSolStyles: PropTypes.object,
	resultStyles: PropTypes.object,
	faqStyles: PropTypes.object,
	navigation: PropTypes.object
}

CaseStudyTemplate.defaultProps = {
	taglineStyle: {
		as: 'h1',
		mt: '20px',
		mb: '15px',
		color: '#fff'
	},
	overviewStyles: {
		overviewHeading: {
			as: 'h5',
			fontSize: '28px',
			lineHeight: 1.43,
			fontweight: 400,
			color: '#002fa6',
		},
		clientName: {
			as: 'h6',
			fontweight: '500',
			mb: '.25rem'
		},
		metaHeading: {
			texttransform: 'uppercase',
			fontweight: 500,
			fontSize: '14px',
			letterspacing: '1px',
			color: '#333'
		}
	},
	social: {
		color: '#ababab',
		fontSize: '15px',
		tooltip: true,
		tooltip_position: 'bottom-left'
	},
	problemSolStyles: {
		problemHeading: {
			as: 'h6',
			position: 'relative',
			fontSize: '15px',
			fontweight: 500,
			lineHeight: 1.74,
			mb: '20px'
		},
		problemIcon: {
			fontSize: '18px',
			fontweight: 400,
			pr: '15px',
			mt: '5px'
		}
	},
	resultStyles: {
		resultText: {
			fontSize: '24px'
		}
	}
}

export default CaseStudyTemplate;
