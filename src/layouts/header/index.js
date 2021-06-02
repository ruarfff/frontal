import SearchForm from "@components/forms/search-form/layout-three"
import Logo from "@components/logo"
import { MainMenu, MobileMenu } from "@components/menu"
import BurgerButton from "@ui/burger-button"
import CloseButton from "@ui/close-button"
import Flyout, { FlyoutBody, FlyoutHeader } from "@ui/flyout"
import OffCanvas, { OffCanvasBody, OffCanvasHeader } from "@ui/off-canvas"
import { Col, Container, Row } from "@ui/wrapper"
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React, { Fragment, useEffect, useRef, useState } from "react"
import {
  FixedHeader,
  FixedHeaderHeight,
  HeaderBottom,
  HeaderCol,
  HeaderElement,
  HeaderMain,
  HeaderNavigation,
  HeaderWrap
} from "./header.style"

const Header = ({ props, ...styles }) => {
  const headerData = useStaticQuery(graphql`
    query HeaderThreeDataQuery {
      allMenuJson {
        edges {
          node {
            id
            text
            link
          }
        }
      }
    }
  `)
  const [flyoutOpen, setFlyoutOpen] = useState(false)
  const [offCanvasOpen, setOffcanvasOpen] = useState(false)
  const [fixedHeaderHeight, setFixedHeaderHeight] = useState(0)
  const [totalHeaderHeight, setTotalHeaderHeight] = useState(0)
  const [sticky, setSticky] = useState(false)
  const headerRef = useRef(null)
  const fixedRef = useRef(null)
  const flyoutHandler = () => {
    setFlyoutOpen(prevState => !prevState)
  }
  const offCanvasHandler = () => {
    setOffcanvasOpen(prevState => !prevState)
  }

  useEffect(() => {
    setFixedHeaderHeight(fixedRef.current.clientHeight)
    setTotalHeaderHeight(headerRef.current.clientHeight)
  }, [fixedHeaderHeight])

  useEffect(() => {
    const scrollHandler = () => {
      let scrollPos = window.scrollY
      if (scrollPos > totalHeaderHeight) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    }

    window.addEventListener("scroll", scrollHandler)
    return () => {
      window.removeEventListener("scroll", scrollHandler)
    }
  }, [sticky, totalHeaderHeight])

  const { logoStyle, burgerBtnElStyle, transparent } = styles
  const menuArr = headerData.allMenuJson.edges

  return (
    <Fragment>
      <HeaderWrap ref={headerRef} isSticky={sticky} transparent={transparent}>
        <HeaderBottom>
          <FixedHeader ref={fixedRef} isSticky={sticky}>
            <Container>
              <Row>
                <Col lg={12}>
                  <HeaderMain>
                    <HeaderCol left>
                      <Logo
                        {...logoStyle}
                        darkLogo={!transparent}
                        whiteLogo={transparent && !sticky}
                      />
                    </HeaderCol>
                    <HeaderCol right>
                      <HeaderNavigation>
                        <MainMenu
                          whiteColor={transparent && !sticky}
                          layout={3}
                          alignment="right"
                          menuData={menuArr}
                        />
                      </HeaderNavigation>
                      <HeaderElement
                        {...burgerBtnElStyle}
                        visibility={{ default: "false", lg: "true" }}
                      >
                        <BurgerButton
                          className="burger-btn"
                          onClick={offCanvasHandler}
                        />
                      </HeaderElement>
                    </HeaderCol>
                  </HeaderMain>
                </Col>
              </Row>
            </Container>
          </FixedHeader>
          <FixedHeaderHeight height={fixedHeaderHeight} />
        </HeaderBottom>
      </HeaderWrap>
      <Flyout isOpen={flyoutOpen}>
        <FlyoutHeader>
          <Container fluid>
            <Row>
              <Col lg={12} textalign="right">
                <CloseButton size="large" onClick={flyoutHandler} />
              </Col>
            </Row>
          </Container>
        </FlyoutHeader>
        <FlyoutBody>
          <SearchForm />
        </FlyoutBody>
      </Flyout>
      <OffCanvas
        scrollable={true}
        isOpen={offCanvasOpen}
        onClick={offCanvasHandler}
      >
        <OffCanvasHeader onClick={offCanvasHandler}>
          <Logo darkLogo align={{ default: "flex-start" }} />
        </OffCanvasHeader>
        <OffCanvasBody>
          <MobileMenu menuData={menuArr} />
        </OffCanvasBody>
      </OffCanvas>
    </Fragment>
  )
}

Header.propTypes = {
  phoneElStyle: PropTypes.object,
}

Header.defaultProps = {
  noticeStyle: {
    fontSize: "14px",
    lineHeight: 1.78,
  },
  logoStyle: {
    pt: "14px",
    pb: "14px",
  },
  phoneElStyle: {
    mr: "20px",
  },
  searchElStyle: {
    pl: "50px",
  },
  burgerBtnElStyle: {
    pl: "25px",
  },
}

export default Header
