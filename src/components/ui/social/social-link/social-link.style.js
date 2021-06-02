import styled, { css } from "styled-components";

export const SocialLinkWrap = styled.a`
    color: ${props => props.theme.colors.textColor};
    position: relative;
    display: inline-block;
    &:not(:last-child){
        margin-right: ${props => props.space};
    }
    ${props => props.size === 'small' && css`
        svg, i{
            height: 16px;
            width: 16px;
            font-size: 16px;
        }
    `}
    ${props => props.size === 'medium' && css`
        svg, i{
            width: 20px;
            height: 20px;
            font-size: 20px;
        }
    `}
    ${props => props.size === 'large' && css`
        svg, i{
            width: 25px;
            height: 25px;
            font-size: 25px;
        }
    `}
    ${props => props.varient === 'flat' && css`
        height: 48px;
        width: 48px;
        text-align: center;
        line-height: 48px;
        background: #ededed;
        svg, i{
            width: 18px;
            height: 18px;
            font-size: 18px;
        }
        &:hover{
            background: ${props => props.theme.colors.themeColor};
            color: #fff;
        }
    `}
    ${props => props.varient === 'outlined' && css`
        height: 48px;
        width: 48px;
        text-align: center;
        line-height: 46px;
        background: transparent;
        border: 1px solid ${props => props.theme.colors.borderColor};
        svg, i{
            width: 18px;
            height: 18px;
            font-size: 18px;
        }
        &:hover{
            background: ${props => props.theme.colors.themeColor};
            color: #fff;
        }
        ${props => props.skin === 'light' && css`
            border-color: #fff;
            &:hover{
                color: ${props => props.theme.colors.themeColor};
                background: #fff;
            }
        `}
    `}
    ${props => props.varient === 'texted' && css`
        padding: 5px 8px;
        margin-right: 0 !important;
        color: #333;
        &:not(:first-child){
            &:before{
                content: '-';
                position: absolute;
                top: 50%;
                left: -5px;
                transform: translateY(-50%);
                color: #333;
            }
        }
        .title{
            position: relative;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 500;
            padding: 5px 0;
            z-index: 1;
            &:before{
                content: '';
                height: 2px;
                bottom: 0;
                position: absolute;
                left: 0;
                right: 0;
                z-index: -2;
                background: rgba(0, 0, 0, .2);
            }
            &:after{
                content: '';
                height: 2px;
                width: 0;
                bottom: 0;
                position: absolute;
                left: auto;
                right: 0;
                z-index: -1;
                transition: width 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
            }
        }
        &:hover{
            .title{
                &:after{
                    background-color: #d2a98e;
                    width: 100%;
                    left: 0;
                }
            }
        }
        ${props => props.skin === 'light' && css`
            &:not(:first-child){
                &:before{
                    color: #ffffff;
                }
            }
            .title{
                &:before{
                    background-color: rgba(255, 255, 255, 0.7);
                }
            }
            &:hover{
                .title{
                    &:after{
                        background-color: #ffffff;
                        width: 100%;
                        left: 0;
                    }
                }
                color: #ffffff;
            }
        `}
    `}
    ${props => props.shape === 'rounded' && css`
        border-radius: 50%;
    `}
    ${props => props.hastitle && props.varient !== 'texted' && css`
        display: inline-flex;
        align-items:center;
        .title{
            margin-left: 10px;
            text-transform: capitalize;
        }
    `}

    ${props => props.skin === 'light' && css`
        color: #fff;
    `}
    ${props => props.tooltip && css`
        .title{
            position: absolute;
            z-index: 1000000;
            pointer-events: none;
            text-transform: capitalize;
            bottom: 100%;
            visibility: hidden;
            opacity: 0;
            background: ${props => props.theme.colors.themeColor};
            color: white;
            min-height: 30px;
            padding: 0 10px;
            line-height: 30px;
            font-size: 14px;
            white-space: nowrap;
            border-radius: 5px;
            left: 50%;
            transform: translateX(-50%);
            box-shadow: 4px 4px 8px rgba(0,0,0,0.3);
            transition: opacity 0.3s ease,visibility 0.3s ease,transform 0.3s cubic-bezier(0.71, 1.7, 0.77, 1.24),-webkit-transform 0.3s cubic-bezier(0.71, 1.7, 0.77, 1.24);
            &:after{
                position: absolute;
                content: "";
                z-index: 1000000;
                top: 100%;
                background: transparent;
                border: 7px solid transparent;
                z-index: 1000001;   
                border-top-color: ${props => props.theme.colors.themeColor};
                left: calc(50% - 7px);     
            }
        }
        &:hover{
            .title{
                visibility: visible;
                opacity: 1;
                transform: translateX(-50%) translateY(-8px);
            }
        }
        
        ${props => props.tooltip_bg === 'dark' && css`
            .title{
                background: ${props => props.theme.colors.black};
                &:after{
                    border-top-color: ${props => props.theme.colors.black};
                }
            }
        `}
        ${props => props.tooltip_position === 'bottom-left' && css`
            .title{
                bottom: auto;
                left: 50%;
                transform: translateX(-100%);
                top: 100%;
                left: 100%;
                &:after{
                    border-bottom-color: ${props => props.theme.colors.themeColor};
                    border-top-color: transparent;
                    top: auto;
                    bottom: 100%;
                    left: calc(100% - 20px);
                }
                ${props => props.tooltip_bg === 'dark' && css`
                    &:after{
                        border-bottom-color: ${props => props.theme.colors.black};
                        border-top-color: transparent;
                    }
                `}
            }
            &:hover{
                .title{
                    transform: translateX(-100%) translateY(8px);
                }
            }
        `}
    `}
    ${props => props.hover && css`
        &:hover{
            color: ${props => props.hover.color}
        }
    `}
`;
