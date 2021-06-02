import React from "react";
import { RatingsWrap } from './ratings.style.js'

const Ratings = ({ rating, ...restProps }) => {
	const ratingRound = Math.round(rating)
	const ratingItems = [];
	const disableRating = [];
	for (let i = 1; i <= ratingRound; i++) {
		ratingItems.push(<i className="fa fa-star" key={`rating-${i}`}></i>)
	}

	if (rating < 5) {
		for (let i = 1; i <= 5 - ratingRound; i++) {
			disableRating.push(<i className="disable fa fa-star" key={`disable-rating-${i}`}></i>)
		}
	}
	return (
		<RatingsWrap {...restProps}>
			{ratingItems}
			{disableRating}
		</RatingsWrap>
	)
}

export default Ratings;