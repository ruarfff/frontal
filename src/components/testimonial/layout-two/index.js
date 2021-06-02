import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
	TestimonialWrap,
	TestimonialSubject,
	TestimonialReview,
	AuthorInfoWrap,
	AuthorMedia,
	AuthorInfo,
	AuthorName,
	AuthorRole
} from './testimonial.style'

const Testimonial = props => {
	const { authorImg, authorName, authroRole, subject, review, testimonialStyle } = props;
	const { wrapperStyle, infoStyle, imageStyle, reviewStyle, subjectStyle } = testimonialStyle;
	let authorImage;
	if (typeof authorImg === 'object') {
		authorImage = <GatsbyImage image={getImage(authorImg)} alt={authorName} />;
	} else {
		authorImage = <img src={authorImg} className="img-fluid" alt={authorName} />;
	}
	return (
		<TestimonialWrap {...wrapperStyle}>
			{subject && <TestimonialSubject {...subjectStyle}>{subject}</TestimonialSubject>}
			{review && <TestimonialReview {...reviewStyle}>{review}</TestimonialReview>}
			<AuthorInfoWrap {...infoStyle}>
				{authorImg && (
					<AuthorMedia {...imageStyle}>
						{authorImage}
					</AuthorMedia>
				)}
				{(authorName || authroRole) && (
					<AuthorInfo>
						{authorName && <AuthorName>{authorName}</AuthorName>}
						{authroRole && <AuthorRole>{authroRole}</AuthorRole>}
					</AuthorInfo>
				)}
			</AuthorInfoWrap>
		</TestimonialWrap>
	)
}

Testimonial.propTypes = {
	authorImg: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	rating: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	authorName: PropTypes.string,
	authroRole: PropTypes.string,
	review: PropTypes.string,
}

Testimonial.defaultProps = {
	testimonialStyle: {
		wrapperStyle: {
			bgColor: '#fff',
			p: '51px 37px 40px',
			borderRadius: '5px'
		},
		subjectStyle: {
			mb: '15px'
		},
		reviewStyle: {
			fontSize: '18px',
			color: '#002FA6'
		},
		infoStyle: {
			mt: '20px'
		},
		imageStyle: {
			mr: '30px',
			circle: true
		}
	}
}

export default Testimonial;