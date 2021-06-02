import React, { useState } from "react";
import PropTypes from "prop-types";
import Swiper from 'react-id-swiper';
// import '../../../assets/css/swiper.css'
import { SwiperWrap, SwiperButtonWrap } from './swiper.style'

const SwiperSlider = ({ children, settings, ...props }) => {
	const [swiper, setSwiper] = useState(null);
	const goNext = () => {
		if (swiper !== null) {
			swiper.slideNext();
		}
	};

	const goPrev = () => {
		if (swiper !== null) {
			swiper.slidePrev();
		}
	};

	const {
		slidesPerView, spaceBetween, arrows = false, pagination = true, loop, lazy,
		centeredSlides, freeMode, autoplay = false, delay, speed, paginationStyle = {}, breakpoints = {}
	} = settings || {}

	let isSpaceBetween;
	if (spaceBetween || spaceBetween === 0) {
		isSpaceBetween = true
	} else {
		isSpaceBetween = false
	}

	const params = {
		slidesPerView: slidesPerView ? slidesPerView : 1,
		spaceBetween: isSpaceBetween ? spaceBetween : 30,
		loop: loop ? loop : false,
		centeredSlides: centeredSlides ? centeredSlides : false,
		freeMode: freeMode ? freeMode : false,
		lazy: lazy ? lazy : false,
		speed: speed ? speed : 5000,
		pagination: pagination && {
			el: '.swiper-pagination',
			clickable: true
		},
		autoplay: autoplay && {
			delay: delay ? delay : 2500,
			disableOnInteraction: false
		},
		breakpoints
	}

	const restProps = { ...props, paginationStyle: pagination && paginationStyle }

	return (
		<SwiperWrap {...restProps}>
			<Swiper getSwiper={setSwiper} {...params}>
				{children}
			</Swiper>
			{arrows && (
				<SwiperButtonWrap>
					<button type="button" className="swiper-btn swiper-btn-prev" onClick={goPrev}>
						<i className="icon fa-chevron-left"></i>
					</button>
					<button type="button" className="swiper-btn swiper-btn-next" onClick={goNext}>
						<i className="icon fa-chevron-right"></i>
					</button>
				</SwiperButtonWrap>
			)}
		</SwiperWrap>
	)
}

SwiperSlider.propTypes = {
	children: PropTypes.node.isRequired,
	settings: PropTypes.object
}

// SwiperSlider.defaultProps = {
//     settings: {
//         slidesPerView: 4,
//         loop: true,
//         speed: 1000,
//         spaceBetween: 0,
//         autoplay: false,
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true
//         }
//     }
// }

export default SwiperSlider;