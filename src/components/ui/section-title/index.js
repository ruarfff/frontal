import React from "react";
import PropTypes from "prop-types";
import { SectionTitleWrap } from './section-title.style'

const SectionTitle = ({ title, subtitle, layout, ...props }) => {
	if (layout === 1) {
		return (
			<SectionTitleWrap {...props} layout={layout}>
				{subtitle && <h6>{subtitle}</h6>}
				{title && <h3 dangerouslySetInnerHTML={{ __html: title }} />}
			</SectionTitleWrap>
		)
	}
	return (
		<SectionTitleWrap {...props} layout={layout}>
			{title && <h3 dangerouslySetInnerHTML={{ __html: title }} />}
			{subtitle && <h6>{subtitle}</h6>}
		</SectionTitleWrap>
	)
}

SectionTitle.propTypes = {
	align: PropTypes.oneOf(['left', 'center', 'right']),
	mb: PropTypes.string
}

SectionTitle.defaultProps = {
	align: 'center',
	layout: 1
}
export default SectionTitle;