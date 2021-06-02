import React, { useState, useEffect } from 'react';
import { ScrollTopButton } from './scroll-to-top.style'

const ScrollToTop = (props) => {
	const [stick, setStick] = useState(false)
	const onClickHandler = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	useEffect(() => {
		var position = window.pageYOffset

		const scrollHandler = () => {
			let scrollPos = window.pageYOffset;
			if (scrollPos < 200) {
				setStick(false);
			} else if (scrollPos < position) {
				setStick(true);
			} else {
				setStick(false);
			}
			position = scrollPos
		}

		window.addEventListener('scroll', scrollHandler);
		return () => {
			window.removeEventListener('scroll', scrollHandler);
		}
	}, [stick]);


	if (stick) {
		return (
			<ScrollTopButton type="button" onClick={onClickHandler} isStick={true} {...props}>
				<i className="icon arrow-up fal fa-long-arrow-up"></i>
				<i className="icon arrow-bottom fal fa-long-arrow-up"></i>
			</ScrollTopButton>
		)
	} else {
		return null;
	}

}

export default ScrollToTop
