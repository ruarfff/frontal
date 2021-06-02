import styled, { css } from "styled-components";
import { fadeInDown } from '@assets/css/animations'
import { device } from '@theme'

export const HeaderTop = styled.div`
    background: #F8F8F8;
    @media ${device.medium}{
        display: none;
    }
`;

export const HeaderBottom = styled.div`
    position: relative;
`;

export const FixedHeader = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
    transition: ${props => props.theme.transition};
    background-color: #fff;
    z-index: 20;
    ${props => props.isSticky && css`
        background-color: #fff !important;
        position: fixed;
        z-index: 999;
        box-shadow: 0 8px 20px 0 rgba(0,0,0,0.1);
        animation: .95s ease-in-out 0s normal none 1 running ${fadeInDown};
        transition: ${props => props.theme.transition};
        .search-btn{
            svg, i{
                color: ${props => props.theme.colors.headingColor} !important;
            }
        }
        .burger-btn{
            span{
                background-color: ${props => props.theme.colors.headingColor} !important;
                &:before,
                &:after{
                    background-color: ${props => props.theme.colors.headingColor} !important;
                }
            }
        }
    `}
`;

export const FixedHeaderHeight = styled.div`
    height: ${props => props.height}px;
`;

export const HeaderMain = styled.div`
    display: flex;
    align-items: center;
    ${props => props.top && css`
        height: 50px;
    `}
`;

export const HeaderCol = styled.div`
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    ${props => props.left && css`
        justify-content: flex-start;
        @media ${device.medium}{
            flex-basis: 20%;
        }
        @media ${device.small}{
            flex-basis: 50%;
        }
    `}
    ${props => props.right && css`
        justify-content: flex-end;
    `}
`;

export const HeaderNavigation = styled.div`
    @media ${device.large}{
        display: none;
    }
`;

export const HeaderElement = styled.div`
    margin-right: ${props => props.mr};
    padding-left: ${props => props.pl};
    ${props => props.visibility && css`
        display: ${props => props.visibility.default === 'true' ? 'flex' : 'none'};
        @media  ${device.large}{
            display: ${props => props.visibility.lg === 'true' ? 'flex' : 'none'};
        }
        @media  ${device.medium}{
            ${props => props.visibility.md !== undefined && css`
                display: ${props => props.visibility.md === 'true' ? 'flex' : 'none'};
            `}
        }
        @media  ${device.small}{
            ${props => props.visibility.sm !== undefined && css`
                display: ${props => props.visibility.sm === 'true' ? 'flex' : 'none'};
            `}
        }
    `}
`;

export const HeaderInfoItem = styled.div`
    font-size: 14px;
    svg, i{
        font-size: 14px;
        margin-right: 6px;
        height: 17px;
        color: ${props => props.theme.colors.textColor};
    }
`;

export const HeaderWrap = styled.header`
    .search-btn{
        line-height: 0;
        font-size: 18px;
        &:hover{
            transition: ${props => props.theme.transition};
            transform: scale(1.15, 1.15);
        }
    }
    ${props => props.transparent && css`
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 30;
        ${HeaderTop}{
            background: transparent;
            border-bottom: 1px solid #fff;
        }
        ${FixedHeader}{
            background: transparent;
        }
        ${HeaderInfoItem}{
            strong, svg, span, i{
                color: #fff;
            }
        }
        .search-btn{
            svg, i{
                color: #fff;
            }
        }
        .burger-btn{
            span{
                background-color: #fff;
                &:before,
                &:after{
                    background-color: #fff;
                }
            }
        }
    `}
`;