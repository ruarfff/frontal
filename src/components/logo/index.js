import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { LogoWrapper } from './logo.style';

const Logo = props => {
	return (
		<LogoWrapper {...props}>
			<Link to="/">
				<StaticImage src="../../assets/images/logo/light-logo.png" className="img-fluid static-img light-logo" alt="logo" width={160} height={48} />
				<StaticImage src="../../assets/images/logo/dark-logo.png" className="img-fluid static-img dark-logo" alt="logo" width={160} height={48} />
			</Link>
		</LogoWrapper>
	)
}

Logo.propTypes = {
	justifycontent: PropTypes.string
}

Logo.defaultProps = {
	justifycontent: 'flex-start'
}

export default Logo
