import styled, { css } from "styled-components";
import Heading from "@ui/heading";
import Text from "@ui/text";
import { Link } from "gatsby";
import { boxImageAnimationSignal } from '../../../assets/css/animations'
import { device } from "@theme";

export const BoxImgInner = styled.div`
    box-shadow: 0 18px 40px rgba(51,51,51,0.1);
    background: #fff;
    border-radius: 5px;
    padding: 50px 30px 63px;
    transition: ${props => props.theme.transition};
    text-align: center;
    position: relative;
    @media ${device.xsmall}{
        padding: 40px 20px 44px;
    }
`;

export const BoxImgWrap = styled.figure`
    text-align: center;
    margin-bottom: 41px;
    @media ${device.xsmall}{
        margin-bottom: 25px;
    }
`;

export const BoxContentWrap = styled.div`
    text-align: center;
`;

export const HeadingWrap = styled(Heading)`
    font-weight: ${props => props.fontweight || 500};
    line-height: ${props => props.lineHeight || 1.25};
    margin-bottom: ${props => props.mb || '12px'};
`;

export const TextWrap = styled(Text)`
    color: ${props => props.color};
    font-weight: ${props => props.fontweight};
    line-height: ${props => props.lineHeight};
`;

export const BoxCircleBtnWrap = styled.div`
    height: 56px;
    width: 56px;
    position: absolute;
    left: 50%;
    bottom: -28px;
    transform: translateX(-50%);
    .middle-dot{
        pointer-events: none;
        content: '';
        position: absolute;
        top: -12px;
        left: -12px;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 2px solid #086ad8;
        opacity: 0;
        transform-origin: 50% 50%;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        &.dot-2{
            pointer-events: none;
            content: '';
            position: absolute;
            top: -12px;
            left: -12px;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            border: 2px solid #086ad8;
            opacity: 0;
            transform-origin: 50% 50%;
            animation-fill-mode: forwards;
            animation-iteration-count: infinite;
        }
    }
`;

export const BoxCircleBtnInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

export const BoxCircleBtn = styled(Link)`
    position: absolute;
    top: 0;
    left: 0;
    width: 56px;
    height: 56px;
    line-height: 56px;
    text-align: center;
    border-radius: 50%;
    font-size: 24px;
    color: #fff;
    background: ${props => props.theme.colors.secondary};
    .icon{
        color: #fff;
    }
    &:hover{
        color: #fff;
    }
`;

export const BoxImgWrapper = styled.div`  
    height: ${props => props.height};
    margin-bottom: 28px;
    margin-top: ${props => props.mt};
    ${props => props.responsive && css`
        ${props => props.responsive.small && css`
            @media ${device.small}{
                margin-top: ${props => props.responsive.small.mt};
            }
        `}
    `}
    &:hover{
        ${BoxCircleBtnWrap}{
            .middle-dot{
                animation: ${boxImageAnimationSignal} cubic-bezier(0, 0.55, 0.55, 1) 2s;
                animation-iteration-count: 1;
                animation-fill-mode: none;
                animation-fill-mode: forwards;
                animation-iteration-count: infinite;
            }
        }
        ${BoxCircleBtn}{
            background: ${props => props.theme.colors.themeColor};
        }
    }
`;