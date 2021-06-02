import React from "react";
import { Link } from "gatsby";
import { NavItem, NavInner } from './post-nav.style'

const PostNav = ({ title, path, image, rel }) => {
	let imageSrc;
	if (image) {
		imageSrc = image.src;
	}
	return (
		<NavItem rel={rel} className="post-nav">
			<Link to={`/${path}`}>
				<NavInner rel={rel} bgImage={imageSrc}>
					<h6>{title}</h6>
					<i className="icon fa fa-angle-right"></i>
				</NavInner>
			</Link>
		</NavItem>
	)
}

export default PostNav;