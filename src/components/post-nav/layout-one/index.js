import React from "react";
import { Link } from "gatsby";
import { NavItem, NavInner } from './post-nav.style'

const PostNav = ({ title, slug, image, rel }) => {
	return (
		<NavItem rel={rel}>
			<Link to={`/case-study/${slug}`}>
				<NavInner rel={rel}>
					<h6>{title}</h6>
					<img src={image.src} alt={title} />
					<i className="icon fa fa-angle-right"></i>
				</NavInner>
			</Link>
		</NavItem>
	)
}

export default PostNav;