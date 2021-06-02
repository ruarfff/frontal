import React from "react";
import Anchor from "@ui/anchor";
import { createList, slugify } from "@utils/utilFunctions";
import { CategroiesWrap } from './categories.style'

const Categories = ({ categories, ...restProps }) => {
	let catList = createList({
		list: categories
	});
	return (
		<CategroiesWrap {...restProps}>
			{catList.map(cat => (
				<Anchor path={`/category/${slugify(cat.text)}`} key={slugify(cat.text)}>
					{cat.text}{cat.sep}
				</Anchor>
			))}
		</CategroiesWrap>
	)
}

export default Categories;