import styled, { css } from "styled-components";
import { NavbarWrap } from "@ui/navbar/navbar.style";
import { NavItemWrap } from "@ui/navbar/navitem/navitem.style";
import { NavLinkWrap, AnchorTag, SmoothScroll } from "@ui/navbar/navlink/navlink.style";
import { SubmenuWrap } from "@ui/navbar/submenu/submenu.style";
import { MegamenuWrap } from "@ui/navbar/megamenu/megamenu.style";
import { device } from "@theme";


export const MainMenuWrap = styled.nav`
    flex-grow: 1;
    display: flex;
    align-items: center;
    ${props => props.alignment === 'right' && css`
        justify-content: flex-end;
    `}
    ${props => props.alignment === 'left' && css`
        justify-content: flex-start;
    `}
    ${props => props.alignment === 'center' && css`
        justify-content: center;
    `}
    ${NavbarWrap}{
        ${NavItemWrap}{
            &:hover{
                & > ${SubmenuWrap},
                & > ${MegamenuWrap}{
                    transform: translateY(0);
                    visibility: visible;
                    opacity: 1;
                    pointer-events: visible;
					z-index: 9;
					ul{
						pointer-events: visible;
					}
                }
                & > ${NavLinkWrap},
                & > ${AnchorTag},
                & > ${SmoothScroll}{
                    color: ${props => props.hoverColor || props.theme.colors.themeColor};
                    span{
                        &:before{
                            width: 100%;
                            left: 0;
                        }
                    }
                    & > .icon{
                        color: ${props => props.hoverColor || props.theme.colors.themeColor};
                    }
                }
            }
        }
        & > ${NavItemWrap}{
			${SubmenuWrap}{
				left: 0; 
			}
            &:first-child{
                margin-left: 0;
                padding-left: 0;
				${SubmenuWrap}{
					left: 0;
				}
            }
            &:last-child{
                margin-right: 0;
                padding-right: 0;
            } 
            &:last-child{
                ${SubmenuWrap}{
                    ${NavItemWrap}{
                        & > ul{
                            @media ${device.xxlarge}{
                                left: auto;
                                right: 100%;
                            }
                        }
                    }
                }
            }
            & > ${NavLinkWrap},
            & > ${AnchorTag},
            & > ${SmoothScroll}{
                position: relative;
                color: ${props => props.color};
                span{
                    ${props => props.vSpace && css`
                        padding-top: ${props => props.vSpace / 2}px;
                        padding-bottom: ${props => props.vSpace / 2}px;
                    `}
                    &:before{
                        background-color: ${props => props.barColor};
                    }
                }
                & > .icon{
                    font-size: 18px;
                    color: ${props => props.color};
                }
            }
            ${props => props.alignment === 'right' && css`
                &:last-child,
                :nth-last-child(2){
                    & > ${SubmenuWrap}{
                        left: auto;
                        right: 0;
                    }
                }
            `}
        }
        ${SubmenuWrap}{
            ${NavItemWrap}{
                padding: 0;
                margin: 0;
                position: relative;
                &:hover{
                    & > ${NavLinkWrap},
                    & > ${AnchorTag},
                    & > ${SmoothScroll}{
                        ${props => props.submenu && css`
                            ${props => props.submenu.hoverColor === 'primary' && css`
                                color: ${props => props.theme.colors.themeColor};
                            `}
                            ${props => props.submenu.hoverColor !== 'primary' && css`
                                color: ${props => props.submenu.hoverColor};
                            `}
                            
                            & > .icon{
                                position: absolute;
                                right: 14px;
                                top: 50%;
                                font-size: 18px;
                                transform: translateY(-50%);
                                vertical-align: middle;
                                color: #ababab;
                            }
                        `}
                        span{
                            &:before{
                                right: auto;
                            }
                        }
                    }
                }
                & > ul{
                    top: 0px;
                    left: 100%;
                    right: auto;
                }

                & > ${NavLinkWrap},
                & > ${AnchorTag},
                & > ${SmoothScroll}{
                    display: block;
                    color: #ababab;
                    padding: 9px 30px;
                    font-weight: 400;
                    span{
                        padding: 0px;
                        &:before{
                            height: 1px;
                        }
                    }
                }
            }
        }
        ${MegamenuWrap}{
            & > ${NavItemWrap}{
                flex-basis: 22%;
                padding-left: 15px;
                padding-right: 15px;
                margin: 0;
            }
            ${SubmenuWrap}{
                position: static;
                visibility: visible;
                opacity: 1;
                transform: translate(0);
                box-shadow: 0 0px 0px rgba(0,0,0,0);
                padding: 0;
                border: none;
                ${NavLinkWrap},
                ${AnchorTag},
                ${SmoothScroll}{
                    padding-left: 0;
                    padding-right: 0;
                }
            }
        }
    }

    ${props => props.layout === 3 && css`
        ${NavbarWrap}{
            & > ${NavItemWrap}{
                padding-left: 24px;
                padding-right: 24px;
                margin: 0;
                & > ${NavLinkWrap},
                & > ${AnchorTag},
                & > ${SmoothScroll}{
                    span{
                        padding: 21px 0;
                        &:before{
                            display: none;
                        }
                    }
                    .icon{
                        font-size: 14px;
                    }
                    &:before{
                        height: 114%;
                    }
                }

                &:hover{
                    ${SubmenuWrap}{
                        top: 110%;
                    }
                    ${MegamenuWrap}{
                        top: 100%;
                    }
                }
            } 
        }
    `}

    ${props => props.layout === 4 && css`
        ${NavbarWrap}{
            & > ${NavItemWrap}{
                padding-left: 24px;
                padding-right: 24px;
                & > ${NavLinkWrap},
                & > ${AnchorTag},
                & > ${SmoothScroll}{
                    span{
                        padding: 21px 0;
                        &:before{
                            display: none;
                        }
                    }
                    .icon{
                        font-size: 14px;
                    }
                    &:before{
                        height: 115%;
						width: calc(100% + 48px);
						left: -24px;
                        ${props => props.isSticky && css`
                            height: 113%;
                        `}
                    }
                }

                &:hover{
					& > ${SubmenuWrap},
					& > ${MegamenuWrap}{
						top: 85%;
					}
                }
            } 
        }
    `}

    ${props => props.whiteColor && css`
        ${NavbarWrap}{
            & > ${NavItemWrap}{
                & > ${NavLinkWrap},
                & > ${AnchorTag},
                & > ${SmoothScroll}{
                    color: #fff;
                }
                .icon{
                    color: #fff;
                }
                &:hover{
                    & > ${NavLinkWrap},
                    & > ${AnchorTag},
                    & > ${SmoothScroll},
                    .icon{
                        color: #fff !important;
                    }
                }
            }
        }
    `}
    ${props => props.blackColor && css`
        ${NavbarWrap}{
            & > ${NavItemWrap}{
                & > ${NavLinkWrap},
                & > ${AnchorTag},
                & > ${SmoothScroll}{
                    color: #000;
                    & > .icon{
                        color: #000;
                    }
                }
                &:hover{
                    & > ${NavLinkWrap},
                    & > ${AnchorTag},
                    & > ${SmoothScroll}{
                        color: #000;
                        & > .icon{
                            color: #000;
                        }
                    }
                }
            }
        }
`}
`;
