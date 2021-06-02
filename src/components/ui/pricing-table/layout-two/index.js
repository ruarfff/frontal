import React from "react";
import Button from "@ui/button";
import {
	PricingTableWrap,
	PricingTableInner,
	PricingTableHeader,
	PricingTableTitle,
	PricingTablePrice,
	PricingTableBody,
	PricingTableList,
	PricingTableFeatureMark,
	PricingTableFooter
} from "./style";

const PricingTable = ({ title, price, period, isFeatured, path, features }) => {
	return (
		<PricingTableWrap isFeatured={isFeatured}>
			<PricingTableInner>
				{isFeatured && (
					<PricingTableFeatureMark>
						<span>Popular Choice</span>
					</PricingTableFeatureMark>
				)}
				<PricingTableHeader>
					{title && <PricingTableTitle>{title}</PricingTableTitle>}
					{(price || price === 0) && (
						<PricingTablePrice>
							<sup>$</sup>
							<h6>{price}</h6>
							<sub>/{period === 'monthly' ? 'mo' : 'y'}</sub>
						</PricingTablePrice>
					)}
				</PricingTableHeader>
				<PricingTableBody>
					{features && (
						<PricingTableList>
							{features.map(feature => <li key={feature.id}><span>{feature.text}</span></li>)}
						</PricingTableList>
					)}

				</PricingTableBody>
				<PricingTableFooter>
					{path && <Button skin="secondary" to={path}>Learn More</Button>}
				</PricingTableFooter>
			</PricingTableInner>
		</PricingTableWrap>
	)
}

export default PricingTable
