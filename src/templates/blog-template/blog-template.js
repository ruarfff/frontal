import AuthorMeta from '@components/blog/author-meta';
import BlogMeta from '@components/blog/blog-meta';
import Categories from '@components/blog/categories';
import Comment from '@components/blog/comment';
import SocialShare from '@components/blog/social-share';
import Tags from '@components/blog/tags';
import VideoThumb from '@components/blog/video-thumb';
import PageHeader from "@components/pageheader";
import PostNav from '@components/post-nav/layout-two';
import Seo from "@components/seo";
import Layout from "@layout";
import Footer from "@layout/footer/footer-one";
import Header from "@layout/header";
import Heading from "@ui/heading";
import ModalVideo from "@ui/modal-video";
import Social, { SocialLink } from '@ui/social';
import Text from "@ui/text";
import Section, { Box, Col, Row } from "@ui/wrapper";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import React, { useState } from "react";
import {
	AuthorAvatar,
	AuthorDesc, AuthorInfo, AuthorWrap, Blockquote, BlogInfo, BlogMedia, BlogNavigation, CategoryBox, FooterMetaWrap, HeaderMetaWrap, SingleBlogWrap, Thumbnail
} from './blog-template.stc';

const BlogTemplate = ({ data, pageContext, location, ...restProps }) => {
	const post = data.markdownRemark.frontmatter;
	const { html } = data.markdownRemark;
	const { id, dateSlug } = data.markdownRemark.fields;
	const { categories, tags, author, video_link } = post;
	const { slug, authorId, next, previous } = pageContext;
	let video_arr, video_id, video_channel;
	if (video_link) {
		video_arr = video_link.split('=', -1);
		video_id = video_arr[1];
		video_channel = video_link.split(".")[1];
	}
	const {
		sectionStyle,
		titleStyle,
		headerMetaStyle,
		authorStyles: { authorSocial, authorDesc } } = restProps;

	const [videoOpen, setVideoOpen] = useState(false);
	const modalVideoOpen = () => {
		setVideoOpen(true)
	}
	const modalVideoClose = () => {
		setVideoOpen(false)
	}

	return (
		<Layout location={location}>
			<Header />
			<Seo title={post.title} />
			<PageHeader
				pageContext={pageContext}
				location={location}
				title="Blog"
			/>
			<main className="site-wrapper-reveal">
				<Section {...sectionStyle}>
					<Row>
						<Col lg={12}>
							<BlogMedia>
								{post.format === 'image' && (
									<Thumbnail>
										<GatsbyImage image={getImage(post.featured_image)} alt={post.title} />
									</Thumbnail>
								)}
								{post.format === 'quote' && (
									<Blockquote>
										<i className="quote-icon fa fa-quote-right"></i>
										{post.quote_text && <h3>“{post.quote_text}”</h3>}
										{post.quote_author && <footer>- {post.quote_author}</footer>}
									</Blockquote>
								)}
								{post.format === 'video' && (
									<VideoThumb
										onClick={modalVideoOpen}
										poster={post.featured_image}
										title={post.title}
									/>
								)}
							</BlogMedia>
						</Col>
					</Row>
					<Row>
						<Col lg={8} ml="auto" mr="auto">
							<SingleBlogWrap>
								<BlogInfo>
									<CategoryBox>
										<Categories categories={categories} />
									</CategoryBox>
									<Heading {...titleStyle}>{post.title}</Heading>
									<HeaderMetaWrap>
										{author && (
											<AuthorMeta
												{...headerMetaStyle}
												slug={authorId}
												name={author.name}
												imageSrc={author.image}
											/>
										)}
										{post.date && (
											<BlogMeta
												{...headerMetaStyle}
												path={`/date/${dateSlug}`}
												text={post.date}
												icon={"fa fa-calendar-alt"}
											/>
										)}
										<BlogMeta
											{...headerMetaStyle}
											path={`/`}
											text={`4 Comments`}
											icon="fa fa-comment-dots"
										/>
									</HeaderMetaWrap>
								</BlogInfo>
								<div className="post-content" dangerouslySetInnerHTML={{ __html: html }} />
								<Box as="footer">
									<FooterMetaWrap>
										<Row alignitems="center">
											<Col sm={6}>
												<Tags tags={tags} />
											</Col>
											<Col sm={6}>
												<SocialShare
													title={post.title}
													url={slug}
												/>
											</Col>
										</Row>
									</FooterMetaWrap>
									<AuthorWrap>
										<AuthorInfo>
											<AuthorAvatar>
												<GatsbyImage image={getImage(author.image)} alt={author.name} />
												{author.social && (
													<Social {...authorSocial}>
														{author.social.twitter && (
															<SocialLink
																path={author.social.twitter}
																label="Twitter">
																<i className="fa fa-twitter"></i>
															</SocialLink>
														)}
														{author.social.facebook && (
															<SocialLink
																path={author.social.facebook}
																label="Facebook">
																<i className="fa fa-facebook"></i>
															</SocialLink>
														)}
														{author.social.linkedin && (
															<SocialLink
																path={author.social.linkedin}
																label="Linkedin">
																<i className="fa fa-linkedin"></i>
															</SocialLink>
														)}
														{author.social.instagram && (
															<SocialLink
																path={author.social.instagram}
																label="Instagram">
																<i className="fa fa-instagram"></i>
															</SocialLink>
														)}
													</Social>
												)}
											</AuthorAvatar>
											<AuthorDesc>
												{author.name && <Heading as="h6">{author.name}</Heading>}
												{author.bio && <Text {...authorDesc}>{author.bio}</Text>}
											</AuthorDesc>
										</AuthorInfo>
									</AuthorWrap>
									<BlogNavigation>
										{previous && (
											<PostNav
												rel="prev"
												path={previous.fields.slug}
												title={previous.frontmatter.title}
												image={previous.frontmatter.featured_image ? previous.frontmatter.featured_image.childImageSharp.fluid : null}
											/>
										)}
										{next && (
											<PostNav
												rel="next"
												path={next.fields.slug}
												title={next.frontmatter.title}
												image={next.frontmatter.featured_image ? next.frontmatter.featured_image.childImageSharp.fluid : null}
											/>
										)}
									</BlogNavigation>
								</Box>
							</SingleBlogWrap>
						</Col>
					</Row>
					<Row>
						<Col lg={8} ml="auto" mr="auto">
							<Comment
								url={slug}
								id={id}
								title={post.title}
							/>
						</Col>
					</Row>
				</Section>
			</main>
			<Footer />
			<ModalVideo
				channel={video_channel}
				videoId={video_id}
				isOpen={videoOpen}
				onClose={modalVideoClose}
			/>
		</Layout>
	)
}


BlogTemplate.propTypes = {
	sectionStyle: PropTypes.object
}

BlogTemplate.defaultProps = {
	sectionStyle: {
		pt: '120px',
		pb: '120px',
		responsive: {
			large: {
				pt: '100px',
				pb: '100px'
			},
			medium: {
				pt: '80px',
				pb: '80px'
			},
			small: {
				pt: '60px',
				pb: '60px',
				fullwidth: true
			}
		}
	},
	titleStyle: {
		as: 'h1',
		fontSize: '40px',
		textalign: 'center',
		mb: '15px',
		wordwrap: 'break-word',
		responsive: {
			medium: {
				fontSize: '35px'
			},
			small: {
				fontSize: '25px'
			}
		}
	},
	headerMetaStyle: {
		mt: '10px',
		mr: '20px'
	},
	authorStyles: {
		authorSocial: {
			fontSize: '13px',
			color: '#333',
			space: 14
		},
		authorDesc: {
			mt: '15px',
			fontSize: '15px',
			color: '#333'
		}
	}
}

export const postQuery = graphql`
    query($slug: String!){
        markdownRemark(fields: {slug: {eq: $slug}}){
            fields {
                dateSlug
                id
            }
            frontmatter {
                title
                categories
                author{
                    name
                    bio
                    image {
                        childImageSharp {
							gatsbyImageData(
								layout: CONSTRAINED
								width: 100
								height: 100
								placeholder: TRACED_SVG
								formats: WEBP
								quality: 100
							)
                        }
                    }
                    social {
                        facebook
                        instagram
                        linkedin
                        twitter
                    }
                }
                date(formatString: "LL")
                tags
                video_link
                quote_text
                quote_author
                format
                featured_image {
					childImageSharp {
						gatsbyImageData(
							layout: CONSTRAINED
							width: 1170
							height: 570
							placeholder: TRACED_SVG
							formats: WEBP
							quality: 100
						)
					}
                }
            }
            html
        }
    }
`;

export default BlogTemplate;
