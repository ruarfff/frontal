import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BoxIconWrap, BoxIconInner, BoxIconTop, IconWrap, Heading, BoxIconBottom, Text } from './box-icon.style'

const BoxIcon = ({ icon, title, desc }) => {
	let boxImage;

	if (typeof icon === 'object') {
		boxImage = <GatsbyImage image={getImage(icon)} alt={title || 'Box Icon'} />;
	} else {
		boxImage = <img src={icon} alt={title || 'Box Icon'} />
	}

	return (
		<BoxIconWrap>
			<BoxIconInner>
				<BoxIconTop>
					{icon && (
						<IconWrap>
							{boxImage}
						</IconWrap>
					)}
					{title && <Heading>{title}</Heading>}
				</BoxIconTop>
				{desc && (
					<BoxIconBottom>
						<Text>{desc}</Text>
					</BoxIconBottom>
				)}
			</BoxIconInner>
		</BoxIconWrap>
	)
}

BoxIcon.defaultProps = {
	title: '',
	desc: ''
}

BoxIcon.propTypes = {
	title: PropTypes.string,
	desc: PropTypes.string,
	icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}

export default BoxIcon;