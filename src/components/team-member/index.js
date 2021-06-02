import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Social, { SocialLink } from "@ui/social";
import {
	TeamMemberWrap,
	TeamMemberInner,
	TeamMemberImage,
	TeamMemberSocialWrap,
	TeamMemberInfo,
	TeamMemberName,
	TeamMemberDesignation
} from './team-member.style'

const TeamMember = ({ imageSrc, name, designation, social, ...restProps }) => {
	const { nameStyle, roleStyle, infoStyle, socialStyle, wrapperStyle, ...restStyles } = restProps;
	const { facebook, twitter, instagram } = social;
	let teamImg;
	if (typeof imageSrc === 'object') {
		teamImg = <GatsbyImage image={getImage(imageSrc)} alt={name || 'Team Member'} />;
	} else {
		teamImg = <img src={imageSrc} alt={name || 'Team Member'} />
	}
	return (
		<TeamMemberWrap {...wrapperStyle} {...restStyles}>
			<TeamMemberInner>
				<TeamMemberImage>
					{teamImg}
					{social && (
						<TeamMemberSocialWrap>
							<Social {...socialStyle}>
								{facebook && <SocialLink title="Facebook" path={facebook}><i className="fab fa-facebook"></i></SocialLink>}
								{twitter && <SocialLink title="Twitter" path={twitter}><i className="fab fa-twitter"></i></SocialLink>}
								{instagram && <SocialLink title="Instagram" path={instagram}><i className="fab fa-instagram"></i></SocialLink>}
							</Social>
						</TeamMemberSocialWrap>
					)}
				</TeamMemberImage>
				<TeamMemberInfo {...infoStyle}>
					{name && <TeamMemberName {...nameStyle}>{name}</TeamMemberName>}
					{designation && <TeamMemberDesignation {...roleStyle}>{designation}</TeamMemberDesignation>}
				</TeamMemberInfo>
			</TeamMemberInner>
		</TeamMemberWrap>
	)
}

TeamMember.propTypes = {
	imageSrc: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.string
	]),
	name: PropTypes.string,
	designation: PropTypes.string,
	social: PropTypes.object,
	layout: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	socialStyle: PropTypes.object
}

TeamMember.defaultProps = {
	layout: 1,
	socialStyle: {
		skin: 'light',
		tooltip: true,
		hover: {
			color: '#fff'
		}
	},
	social: {}
}

export default TeamMember;