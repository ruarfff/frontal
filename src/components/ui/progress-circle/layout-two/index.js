import React, { useState } from "react";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import 'react-circular-progressbar/dist/styles.css';
import { ProgressCircleWrap } from "./style";

const ProgressCirle = ({
	value,
	varient,
	rotation,
	color,
	...props
}) => {
	const [focus, setFocus] = useState(false);
	const visibleChangeHandler = (isVisible) => {
		if (isVisible) {
			if (!focus) {
				setFocus(true)
			}
		}
	}
	const restProps = { ...props, color }
	return (
		<VisibilitySensor offset={{ top: 50 }} onChange={(isVisible) => visibleChangeHandler(isVisible)}>
			{({ isVisible }) => {
				const percentage = focus ? value : 0;
				return (
					<ProgressCircleWrap {...restProps}>
						<CircularProgressbarWithChildren
							minValue={0}
							maxValue={100}
							value={percentage}
							strokeWidth={4}
							styles={buildStyles({
								rotation: rotation,
								strokeLinecap: 'round', //  'butt' or 'round'
								pathTransitionDuration: 5,
							})}
						>

							<CountUp start={focus ? 0 : null} end={percentage} duration={5}>
								{({ countUpRef }) => (
									<div className="progress-child">
										<span ref={countUpRef} />%
									</div>
								)}
							</CountUp>
						</CircularProgressbarWithChildren>
					</ProgressCircleWrap>
				)
			}}
		</VisibilitySensor>
	)
}

ProgressCirle.defaultProps = {
	value: '65',
	rotation: 0
}

export default ProgressCirle
