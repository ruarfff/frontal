import styled, { css } from "styled-components";
import { gradationMask } from "@assets/css/animations";
import { device } from "@theme";

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background: #ededed;
    position: absolute;
    top: 24px;
    left: 15px;
    @media ${device.medium}{
        left: 39px;
        height: 100%;
        width: 1px;
        top: 15px;
    }
`;

export const NumberWrap = styled.div`
    display: inline-block;
    position: relative;
    margin-bottom: 56px;
    .mask{
        opacity: 0;
        visibility: hidden;
    }
    .wave-pulse{
        width: 1px;
        height: 0;
        margin: 0 auto;
        &:before,
        &:after{
            opacity: 0;
            content: '';
            display: block;
            position: absolute;
            width: 100px;
            height: 100px;
            top: 50%;
            left: 50%;
            background: #fff;
            border-radius: 50%;
            border: 1px solid #ababab;
            transform: translate(-50%, -50%);
            animation: ${gradationMask} 3s linear infinite;
        }
        &-2{
            &:before{
                animation-delay: 1.2s;
            }
        }
        &-3{
            &:before{
                animation-delay: 2.4s;
            }
        }
    }
    .number{
        position: relative;
        z-index: 1;
        width: 48px;
        height: 48px;
        line-height: 44px;
        text-align: center;
        border: 2px solid #e8e8e8;
        border-radius: 50%;
        font-size: 18px;
        background-color: #fff;
        margin-bottom: 0;
        transition: all 0.7s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
`;

export const ContentWrap = styled.div`
    @media ${device.medium}{
        padding: 10px 0 50px 30px;
    }
`;

export const Heading = styled.h6`
    font-weight: 500;
`;

export const Text = styled.p`
    margin-top: 17px;
    margin-bottom: 20px;
`;


export const GradationWrap = styled.div`
    position: relative;
    padding: 0 15px;
    @media ${device.medium}{
        display: flex;
        align-items: flex-start;
        width: 100%;
    }
    ${props => props.isLast && css`
        ${Line}{
            display: none;
        }
    `}
    &:hover{
        ${NumberWrap}{
            .mask{
                opacity: 1;
                visibility: visible;
            }
            .number{
                background-color: ${props => props.theme.colors.themeColor};
                color: #fff;
            }
        }
    }
`;
