import React from "react";
import GoogleMapReact from "google-map-react";
import MapMarker from "@assets/images/icons/map-marker.png";
import { GooglMapWrap } from "./style";


const GoogleMap = (props) => {
	const { center, APIKey, zoom, ...restProps } = props
	return (
		<GooglMapWrap {...restProps}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: APIKey }}
				defaultCenter={center}
				defaultZoom={zoom}
			>
				<div className="marker">
					<img src={MapMarker} alt="Map Marker" />
				</div>
			</GoogleMapReact>
		</GooglMapWrap>
	);
}

GoogleMap.defaultProps = {
	center: {
		lat: 23.7808875,
		lng: 90.2792371
	},
	APIKey: "AIzaSyD79MY72taVRlZVX2DU6L5PXOh3ezUUKMc",
	zoom: 11
}

export default GoogleMap;