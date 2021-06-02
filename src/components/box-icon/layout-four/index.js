import React from "react";
import PropTypes from "prop-types";
import { BoxIconWrap, BoxIconMarker, BoxIconInfo, BoxIconHeading, BoxIconTitle, BoxIconDesc } from './box-icon.style'

const BoxIcon = ({ icon, title, desc, heading, ...restProps }) => {
	const { wrapperStyle, iconStyle, infoStyle, titleStyle, descStyle, headingStyle } = restProps;

	return (
		<BoxIconWrap {...wrapperStyle}>
			{icon && (
				<BoxIconMarker {...iconStyle}>
					<i className={icon}></i>
				</BoxIconMarker>
			)}
			{(title || desc) && (
				<BoxIconInfo {...infoStyle}>
					{heading && <BoxIconHeading {...headingStyle}>{heading}</BoxIconHeading>}
					{title && <BoxIconTitle {...titleStyle}>{title}</BoxIconTitle>}
					{desc && <BoxIconDesc {...descStyle}>{desc}</BoxIconDesc>}
				</BoxIconInfo>
			)}
		</BoxIconWrap>
	)
}

BoxIcon.propTypes = {
	wrapperStyle: PropTypes.object,
	iconStyle: PropTypes.object,
	infoStyle: PropTypes.object,
	titleStyle: PropTypes.object,
	descStyle: PropTypes.object,
	headingStyle: PropTypes.object
}


export default BoxIcon;