import React, { useState } from "react";
import PropTypes from "prop-types";
import parse from "html-react-parser";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { FunFactWrap, FunFactTitle, FunFactCount, FunFactText } from './counter.style'

const Counter = ({ title, countTo, text, ...restProps }) => {
	const { wrapperStyle, countToStyle, textStyle, ...restStyles } = restProps
	const [focus, setFocus] = useState(false);
	const visibleChangeHandler = (isVisible) => {
		if (isVisible) {
			if (!focus) {
				setFocus(true)
			}
		}
	}
	return (
		<FunFactWrap {...wrapperStyle} {...restStyles}>
			{title && <FunFactTitle>{parse(title)}</FunFactTitle>}
			{countTo && (
				<FunFactCount {...countToStyle}>
					<CountUp start={focus ? 0 : null} end={countTo} duration={5}>
						{({ countUpRef }) => (
							<div>
								<span ref={countUpRef} />
								<VisibilitySensor
									onChange={(isVisible) => visibleChangeHandler(isVisible)}>
									<span className="sr-only">+</span>
								</VisibilitySensor>
							</div>
						)}
					</CountUp>
				</FunFactCount>
			)}
			{text && <FunFactText {...textStyle}>{parse(text)}</FunFactText>}
		</FunFactWrap>
	)
}

Counter.propTypes = {
	title: PropTypes.string,
	countTo: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]),
	text: PropTypes.string
}

export default Counter;