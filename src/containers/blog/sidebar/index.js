import React from "react";
import PropTypes from "prop-types";
import Heading from "@ui/heading";
import RecentPostList from '../recent-post-list'
import BlogAd from '../blog-ad'
import PopularTags from '../popular-tags'
import { SidebarWrap, RecentPostListWrap, RecentWidgetBox, AdWidgetBox, TagWidgetBox } from './sidebar.style'

const Sidebar = ({ widgetTitleStyle }) => {
	return (
		<SidebarWrap>
			<RecentWidgetBox>
				<Heading {...widgetTitleStyle}>Recent Posts</Heading>
				<RecentPostListWrap>
					<RecentPostList />
				</RecentPostListWrap>
			</RecentWidgetBox>
			<AdWidgetBox>
				<BlogAd />
			</AdWidgetBox>
			<TagWidgetBox>
				<Heading {...widgetTitleStyle}>Popular Tags</Heading>
				<PopularTags />
			</TagWidgetBox>
		</SidebarWrap>
	)
}

Sidebar.propTypes = {
	widgetTitleStyle: PropTypes.object
}

Sidebar.defaultProps = {
	widgetTitleStyle: {
		fontSize: '34px',
		fontweight: 500,
		mb: '27px'
	}
}

export default Sidebar;