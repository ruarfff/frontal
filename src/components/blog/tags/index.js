import React from "react";
import Anchor from "@ui/anchor";
import { createList, slugify } from "@utils/utilFunctions";
import { TagWrapper } from './tags.style'

const Categories = ({ tags, ...restProps }) => {
	let tagList = createList({
		list: tags
	});
	return (
		<TagWrapper {...restProps}>
			<i className="fa fa-tags icon"></i>
			{tagList.map(tag => (
				<Anchor path={`/tag/${slugify(tag.text)}`} key={slugify(tag.text)}>
					{tag.text}{tag.sep}
				</Anchor>
			))}
		</TagWrapper>
	)
}

export default Categories;