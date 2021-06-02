import styled, { css } from "styled-components";
import { Link } from "gatsby";
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const NavLinkStyled = css`
    display: inline-block;
    position: relative;
    color: ${props => props.theme.colors.black};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.18;
    padding-right: 21px;
    ${props => props.hassubmenu === "false" && css`
        padding: 0;
    `}
      
    &:before{
        position: absolute;
        content: '';
        left: 0;
        top: 0%;
        width: 100%;
        height: 100%;
    }
    &.active{
        color: ${props => props.theme.colors.themeColor};
    }
    span{
        display: inline-block;
        position: relative;
        padding: 31px 0;
        &:before{
            content: '';
            width: 0;
            height: 3px;
            bottom: 0;
            position: absolute;
            left: 0;
            background-color: ${props => props.theme.colors.themeColor};
            transition: ${props => props.theme.transition};
        }
    }
    & > .icon{
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 23px;
        height: 23px;
        line-height: 23px;
        text-align: center;
        font-weight: 400;
        font-size: 14px;
    }
`

export const AnchorTag = styled.a`
    ${NavLinkStyled}
`;

export const NavLinkWrap = styled(Link)`
    ${NavLinkStyled}
`;

export const SmoothScroll = styled(AnchorLink)`
    ${NavLinkStyled}
`;