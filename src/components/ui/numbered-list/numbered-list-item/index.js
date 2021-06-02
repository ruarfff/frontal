import React from "react";
import PropTypes from "prop-types";
import { ItemWrap, ItemAnchor, Marker, TitleWrap, TitleInner, Title, IconWrap } from './numbered-list-item.style'

export const NumberedListItem = ({ path, number, children }) => {
	let numb = number < 10 ? `0${number}` : number;
	return (
		<ItemWrap>
			<ItemAnchor path={path}>
				{number && <Marker>{numb}</Marker>}
				<TitleWrap>
					<TitleInner>
						<Title>{children}</Title>
						<IconWrap>
							<i className="icon icon-1 far fa-long-arrow-right"></i>
							<i className="icon icon-2 far fa-long-arrow-right"></i>
						</IconWrap>
					</TitleInner>
				</TitleWrap>
			</ItemAnchor>
		</ItemWrap>
	)
}

NumberedListItem.propTypes = {
	path: PropTypes.string,
	number: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	title: PropTypes.string
}

NumberedListItem.defautProps = {
	path: "/"
}
