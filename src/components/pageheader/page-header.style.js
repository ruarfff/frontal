import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import { device } from "@theme";

export const PageHeaderWrap = styled(BackgroundImage)`
    background-color: #f6f2ed;
    background-repeat: no-repeat;
    background-position: center center;
    border-bottom-width: 0px;
    padding-top: 136px;
    padding-bottom: 131px;
    background-size: cover;
    text-align: center;
    @media ${device.large}{
        padding-top: 80px;
        padding-bottom: 80px;
    }
    .breadcrumb{
        display: inline-block;
        padding: 0;
        padding-left: 6px;
        margin-bottom: 0;
        border-radius: 0;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 2px;
        line-height: 1.58;
        text-transform: uppercase;
        background-color: transparent;
        &__list{
            margin: 0;
            padding: 0;
            list-style: none;
            &__item{
                display: inline-block;
            }
        }
        &__link{
            position: relative;
            &:after{
                content: '';
                width: 0;
                height: 1px;
                bottom: 0;
                position: absolute;
                left: auto;
                right: 0;
                z-index: -1;
                transition: width 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
                background: currentColor;
            }
            &:hover{
                &:after{
                    width: 100%;
                    left: 0;
                    right: auto;
                    z-index: 0;
                }
            }
            &__active{
                color: #6D70A6;
                &:after{
                    display: none;
                }
            }
        }
        &__title{
            font-size: 56px;
            font-weight: 700;
            color: ${props => props.theme.colors.themeColor};
            display: block;
            margin-bottom: 20px;
            @media ${device.large}{
                font-size: 46px;
                line-height: 1.4;
            }
            @media ${device.medium}{
                font-size: 40px;
            }
            @media ${device.small}{
                font-size: 34px;
            }
        }
    }
`;