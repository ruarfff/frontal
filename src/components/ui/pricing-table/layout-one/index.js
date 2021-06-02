import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Button from "@ui/button";
import {
	PricingTableWrap,
	PricingTableInner,
	PricingTableHead,
	PricingTableTitle,
	PricingTableImage,
	PricingTablePrice,
	PricingTableBody,
	PricingTableBtn,
	PricingTableList,
	PricingTableFeatureMark
} from "./style";


const PricingTable = ({ title, period, image, price, isFeatured, path, features }) => {
	const btnStyle = {
		varient: !isFeatured ? 'outlined' : 'contained',
		hover: !isFeatured ? "true" : 2
	}

	let boxImage;
	if (typeof image === 'object') {
		boxImage = <GatsbyImage image={getImage(image)} alt="Pricing" />;
	} else {
		boxImage = <img src={image} alt="Pricing" />
	}

	return (
		<PricingTableWrap>
			<PricingTableInner>
				{isFeatured && (
					<PricingTableFeatureMark>
						<span>Popular Choice</span>
					</PricingTableFeatureMark>
				)}
				<PricingTableHead>
					{title && <PricingTableTitle>{title}</PricingTableTitle>}
					{image && (
						<PricingTableImage>
							{boxImage}
						</PricingTableImage>
					)}
					{price && (
						<PricingTablePrice>
							<sup>$</sup>
							<h6>{price}</h6>
							<sub>/{period === 'monthly' ? 'mo' : 'y'}</sub>
						</PricingTablePrice>
					)}
				</PricingTableHead>
				<PricingTableBody>
					{path && (
						<PricingTableBtn>
							<Button {...btnStyle} to={path}>Learn More</Button>
						</PricingTableBtn>
					)}
					{features && (
						<PricingTableList>
							{features.map(feature => <li key={feature.id}><i className="fa fa-check"></i><span>{feature.text}</span></li>)}
						</PricingTableList>
					)}
				</PricingTableBody>
			</PricingTableInner>
		</PricingTableWrap>
	)
}

export default PricingTable
