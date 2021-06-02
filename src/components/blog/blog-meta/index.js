import React from "react";
import Text from "@ui/text";
import Anchor from "@ui/anchor";
import { BlogMetaWrap } from './blog-meta.style'

const BlogMeta = ({ icon, text, path, ...restProps }) => {
	return (
		<BlogMetaWrap {...restProps}>
			<Anchor path={path}>
				<i className={icon}></i>
				<Text as="span">{text}</Text>
			</Anchor>
		</BlogMetaWrap>
	)
}

export default BlogMeta;