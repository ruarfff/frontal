import React from "react";
import PropTypes from "prop-types"
import { ThemeProvider } from 'styled-components';
import { theme } from "@theme";
import "@assets/fonts/cerebrisans/cerebrisans.css";
import "@assets/fonts/font-awesome/font-awesome.css";
import "@assets/css/bootstrap.css";
import { GlobalStyle } from "@assets/css/main-style";
import ScrollToTop from "@ui/scroll-to-top";
import Transition from "@components/transition";

const Layout = ({ children, location }) => {
	return (
		<ThemeProvider theme={theme}>
			<Transition location={location}>
				<div className="wrapper">
					<GlobalStyle />
					{children}
					<ScrollToTop />
				</div>
			</Transition>
		</ThemeProvider>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout