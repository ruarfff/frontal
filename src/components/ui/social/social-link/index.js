import React from "react";
import { SocialLinkWrap } from './social-link.style';

export const SocialLink = ({ path, children, title, tooltip, ...props }) => {
	return (
		<SocialLinkWrap
			{...props}
			href={path}
			target="_blank"
			rel="noopener noreferrer"
			tooltip={tooltip}
			hastitle={title && !tooltip}
		>
			{children}
			{title && <span className="title">{title}</span>}
		</SocialLinkWrap>
	)
}