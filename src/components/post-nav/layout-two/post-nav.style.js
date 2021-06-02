import styled, { css } from "styled-components";
// import { device } from "@theme";

export const NavItem = styled.div`
    a{
        display: block;
    }
`;

export const NavInner = styled.div`
    position: relative;
    min-height: 120px;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${props => props.bgImage && css`
        background-image: url(${props => props.bgImage});
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: scroll;
        background-position: center;
    `}
    ${props => !props.bgImage && css`
        background-color: ${props => props.theme.colors.themeColor};
    `}
    &:before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: linear-gradient(-180deg,rgba(51,51,51,0) 0%,#000 80%);
        border-radius: 5px;
        opacity: .5;
    }
    h6{
        position: relative;
        color: #fff;
        font-size: 18px;
        font-weight: 500;
        line-height: 1.56;
        margin: 0;
        z-index: 1;
    }
    i{
        position: relative;
        font-size: 20px;
        font-weight: 400;
        color: #fff;
        z-index: 1;
    }
    ${props => props.rel === 'next' && css`
        padding-right: 20px;
        h6{
            padding-right: 25px;
            padding-left: 20px;
        }
    `}
    ${props => props.rel === 'prev' && css`
        flex-direction: row-reverse;
        padding-left: 20px;
        h6{
            padding-left: 25px;
            padding-right: 20px;
        }
        .icon{
            transform: rotate(180deg)
        }
    `}
`;