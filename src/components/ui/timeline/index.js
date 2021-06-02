import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
	TimelineWrap,
	TimelineList,
	Line,
	Item,
	Dots,
	TimelineRow,
	TimelineFeature,
	TimelineFeatureInner,
	TimelineInfo,
	TimelineInfoInner,
	DateWrap,
	Photo,
	TimelineContent,
	Title,
	Description
} from "./style";

const Timeline = ({ items }) => {
	return (
		<TimelineWrap>
			<TimelineList>
				<Line />
				{items && items.map((item, i) => {
					const { year, image, title, desc } = item;
					let boxImage;
					if (typeof image === "object") {
						boxImage = <GatsbyImage image={getImage(image)} alt="timeline" />;
					} else {
						boxImage = <img src={image} alt="timeline" />
					}
					return (
						<Item key={`timeline-${i}`} align={i % 2 === 0 ? 'left' : 'right'}>
							<Dots />
							<TimelineRow>
								<TimelineFeature>
									<TimelineFeatureInner>
										{year && <DateWrap>{year}</DateWrap>}
										{image && <Photo>{boxImage}</Photo>}
									</TimelineFeatureInner>
								</TimelineFeature>
								<TimelineInfo>
									<TimelineInfoInner>
										<TimelineContent>
											{title && <Title>{title}</Title>}
											{desc && <Description>{desc}</Description>}
										</TimelineContent>
									</TimelineInfoInner>
								</TimelineInfo>
							</TimelineRow>
						</Item>
					)
				})}

			</TimelineList>
		</TimelineWrap>
	)
}

export default Timeline
