import React from "react";
import { LocationBtnWrap, LocationBtnText } from './location-button.style'

const LocationButton = (props) => {
	return (
		<LocationBtnWrap {...props}>
			<LocationBtnText type="button">
				<span className="button-icon"><i className="icon fa fa-map-marker-alt"></i></span>
				<span className="button-text">View on Google map</span>
			</LocationBtnText>
		</LocationBtnWrap>
	)
}

export default LocationButton;