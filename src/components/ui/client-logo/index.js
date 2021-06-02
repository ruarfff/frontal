import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BrandLogoWrap } from './client-logo.style'

const ClientLogo = ({ path, brandImage, hoverImage, title, ...props }) => {
	let brandImg;
	let hoverImg;
	if (typeof brandImage === "object") {
		brandImg = <GatsbyImage image={getImage(brandImage)} alt={title} />;
	} else {
		brandImg = <img src={brandImage} className="img-fluid" alt={title} />
	}
	if (hoverImage) {
		if (typeof hoverImage === "object") {
			hoverImg = <GatsbyImage image={getImage(hoverImage)} alt={title} />;
		} else {
			hoverImg = <img src={hoverImage} className="img-fluid" alt={title} />
		}
	}

	return (
		<BrandLogoWrap {...props}>
			<a href={path}>
				<div className="brand-logo__image">
					{brandImg}
				</div>
				{(props.layout === 1 || props.layout === 2) &&
					<div className="brand-logo__image-hover">
						{hoverImg}
					</div>
				}
			</a>
		</BrandLogoWrap>
	)
}

ClientLogo.propTypes = {
	path: PropTypes.string,
	title: PropTypes.string,
	image: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	hoverImage: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	])
}

ClientLogo.defaultProps = {
	layout: 1,
	path: '/',
	title: 'Brand Logo'
}

export default ClientLogo;