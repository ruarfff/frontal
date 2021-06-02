import styled from "styled-components";
import { NavbarWrap } from "@ui/navbar/navbar.style";
import { NavItemWrap } from "@ui/navbar/navitem/navitem.style";
import { NavLinkWrap, AnchorTag, SmoothScroll } from "@ui/navbar/navlink/navlink.style";
import { SubmenuWrap } from "@ui/navbar/submenu/submenu.style";
import { MegamenuWrap } from "@ui/navbar/megamenu/megamenu.style";
import { ExpandButtonWrap } from "@ui/navbar/expand-button/expand-button.style"

export const MobileMenuWrap = styled.nav`
    ${NavbarWrap}{
        flex-direction: column;
    } 
    ${NavItemWrap}{
        margin-left: 0;
        margin-right: 0;
        position: relative;
        border-bottom: 1px solid rgba(255,255,255,0.15);
        &:hover{
            & > ${NavLinkWrap},
            & > ${AnchorTag},
            & > ${SmoothScroll}{
                color: #fff;
            }
        }
        ${ExpandButtonWrap}{
            position: absolute;
            right: 0;
            top: 12px;
        }
    }
    .submenu-open{
        & > ${SubmenuWrap},
        & > ${MegamenuWrap}{
            max-height: 1000px;
            visibility: visible;
            opacity: 1;
            padding-top: 12px;
            padding-bottom: 10px;
            pointer-events: visible;
        }
    }
    ${NavLinkWrap},
    ${AnchorTag},
    ${SmoothScroll}{
        display: block;
        color: #ffffff;
        padding: 18px 0;
        font-size: 16px;
        font-weight: 500;
        line-height: 1.5;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        span{
            padding: 0;
        }
    } 
    ${SubmenuWrap},
    ${MegamenuWrap}{
        position: relative;
        min-width: 100%;
        padding-top: 0;
        padding-bottom: 0;
        padding-left: 14px;
        padding-right: 0;
        border-top: 1px solid rgba(255,255,255,0.15);
        background-color: transparent;
        top: auto;
        left: 0;
        box-shadow: 0 0px 0px rgba(0,0,0,0.05);
        border-bottom: none;
        transform: translateY(0);
        max-height: 0;
        overflow-y: hidden;
        transition-property: all;
        transition-duration: .5s;
        transition-timing-function: ease-in-out;
        transform-origin: top;
        z-index: 99;
        ${NavItemWrap}{
            &:last-child{
                border-bottom: 0;
            }
        }
        ${NavLinkWrap},
        ${AnchorTag},
        ${SmoothScroll}{
            display: block;
            font-size: 15px;
            color: rgba(255,255,255,0.7);
            font-weight: 500;
            line-height: 1.5;
            padding: 10px 0;
        }
        ${ExpandButtonWrap}{
            right: 0;
            top: 6px;
            width: 30px;
            height: 30px;
            line-height: 30px;
            .icon{
                width: auto;
                line-height: 32px;
                font-size: 18px;
            }
        }
    }
    ${MegamenuWrap}{
        flex-direction: column;
        overflow: hidden;
        & > ${NavItemWrap}{
            h2{
                padding: 10px 0;
                position: relative;
                line-height: 2;
                color: #fff;
                font-size: 15px;
                ${ExpandButtonWrap}{
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
        }
        ${NavLinkWrap},
        ${AnchorTag},
        ${SmoothScroll}{
            
        }
    }
`;