import styled, { css } from "styled-components";
import { zoomBig } from "@assets/css/animations";


export const VideoButtonInner = styled.div`
    position: relative;
    width: 78px;
    height: 78px;
`;

export const VideoMark = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%, -50%);
    pointer-events: none;
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
            width: 200px;
            height: 200px;
            top: 50%;
            left: 50%;
            border-radius: 50%;
            border: 3px solid #ffffff;
            animation: ${zoomBig} 3.25s linear infinite;
            animation-delay: 0s;
        }
        &:before,
        &:after{
            animation-delay: 0s;
            border: 3px solid #ffffff;
        }
        &:before{
            animation-delay: .75s;
        }
    }
`;

export const VideoPlay = styled.div`
    width: 78px;
    height: 78px;
    background: #fff;
    border-radius: 50%;
    transition: all 1s cubic-bezier(0, 0, 0.2, 1);
    box-shadow: 0 20px 30px rgba(0,0,0,0.07);
`;

export const VideoPlayIcon = styled.div`
    font-weight: 500;
    letter-spacing: 3px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1;
    margin-left: 1px; 
    &:before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
        transform: translate(-50%, -50%);
        border-top: 12px solid transparent;
        border-bottom: 12px solid transparent;
        border-left: 19px solid #fff;
        border-left-color: #086AD8;
    }   
`;

export const VideoText = styled.div`
    margin-top: 0;
    margin-left: 35px;
    font-size: 18px;
    color: #fff;
    font-weight: 600;
    line-height: 1.78;
`;

export const VideoButtonWrap = styled.button`
    transition: ${props => props.theme.transition};
    display: flex;
    align-items: center;
    position: relative;
    padding: 0;
    background: transparent;
    border: none;
    &:hover{
        ${VideoPlay}{
            transform: scale3d(1.15, 1.15, 1.15);
        }
    }
    ${props => props.skin === 'primary' && css`
        ${VideoMark}{
            .wave-pulse{
                &:before,
                &:after{
                    border: 3px solid ${props => props.theme.colors.themeColor};
                }
                &:before,
                &:after{
                    border: 3px solid ${props => props.theme.colors.themeColor};
                }
            }
        }

        ${VideoPlay}{
            background: ${props => props.theme.colors.themeColor};
            box-shadow: 0 20px 30px rgba(0,0,0,0.07);
        }

        ${VideoPlayIcon}{
            &:before{
                border-left: 17px solid ${props => props.theme.colors.themeColor};
                border-left-color: #fff;
            }   
        }
    `}
    ${props => props.size === "small" && css`
        ${VideoPlay},
        ${VideoButtonInner}{
            height: 30px;
            width: 30px;
            line-height: 30px;
        }
        ${VideoText}{
            margin-left: 8px;
            font-weight: 500;
            font-size: 14px;
        }
        ${VideoPlayIcon}{
            &:before{
                border-top-width: 6px;
                border-bottom-width: 6px;
                border-left-width: 11px;
            }
        }
    `}
    ${props => props.varient === 'outlined' && css`
        ${VideoPlay}{
            background: transparent;
            ${props => props.border && css`
                border-style: solid;
                border-color: ${props => props.border.color || props.theme.colors.themeColor};
                border-width: ${props => props.border.width || '1px'} 
            `}
        }
    `}
    ${props => props.skin === 'light' && css`
        ${VideoPlay}{
            border-color: #ddd;
        }
        ${VideoPlayIcon}{
            &:before{
                border-left-color: ${props => props.theme.colors.themeColor};
            }
        }
    `}
    
    ${props => props.skin === 'light' && props.varient === 'outlined' && css`
        ${VideoPlayIcon}{
            &:before{
                border-left-color: #fff;
            }
        }
    `}

    ${props => props.textStyle === 2 && css`
        ${VideoText}{
            margin-top: 0;
            margin-left: 59px;
            font-size: 18px;
            font-weight: 500;
            color: rgba(255,255,255,0.8);
            text-transform: uppercase;
            letter-spacing: 2px;
            line-height: 1.45;
            text-align: left;
        }
    `}
    ${props => props.icon && css`
        ${VideoPlayIcon}{
            &:before{
                border-left-color: ${props => props.icon.color};
            }
        }
    `}
`;