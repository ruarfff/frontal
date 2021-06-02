import styled, { css } from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { device } from "@theme"

const ButtonStyled = css`
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    border-style: solid;
    border-color: transparent;
    padding: ${props => props.p || '0 36px'};
    text-align: center;
    display: ${props => props.display};
    justify-content: ${props => props.justify};
    align-items: ${props => props.alignitems};
    border-width: ${props => props.borderwidth};
    transform: translateY(0px);
    min-width: ${props => props.minwidth};
    background: ${props => props.bgcolor};
    ${props => props.color === 'primary' && css`
        color: ${props => props.theme.colors.themeColor};
    `}
    ${props => props.color !== 'primary' && css`
        color: ${props => props.color};
    `}
    margin: ${props => props.m};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    margin-left: ${props => props.ml};
    margin-right: ${props => props.mr};
    padding-top: ${props => props.pt};
    padding-bottom: ${props => props.pb};
    padding-left: ${props => props.pl};
    padding-right: ${props => props.pr};
    ${props => props.border && css`
        ${props => props.border.bottom && css`
            border-bottom-width: ${props => props.border.bottom.width || '1px'};
            border-bottom-style: ${props => props.border.bottom.style || 'solid'};
            border-bottom-color: ${props => props.border.bottom.color || props.theme.colors.borderColor};
        `}
    `};
    @media ${device.xsmall}{
        ${props => props.minwidth && css`
            min-width: auto;
            width: 100%;
        `}
    }
    ${props => props.shadow && css`
        box-shadow: 0 0 30px 5px rgba(0,0,0,0.07);
    `}
    ${props => props.fullwidth && css`
        display: block;
        width: 100%;
    `}
    &:not(:disabled){
        &:hover, &:active, &:focus{
            transform: translateY(-3px);
        }
    }
    ${props => props.hover === 'false' && css`
        &:hover, &:active, &:focus{
            transform: translateY(0);
            ${props => props.color === 'primary' && css`
                color: ${props => props.theme.colors.themeColor};
            `}
            ${props => props.color !== 'primary' && css`
                color: ${props => props.color};
            `}
        }
    `}
    .btn-icon{
        display: inline-block;
        vertical-align: middle;
        line-height: .5; 
        svg, i{
            font-size: ${props => props.iconsize || '22px'};
        }
        ${props => props.iconposition === 'right' && css` 
            margin-left: ${props => props.icondistance};
        `}
        ${props => props.iconposition === 'left' && css` 
            margin-right: ${props => props.icondistance};
        `}
    } 

    ${props => props.shape === 'rectangle' && css`
        border-radius: 0;
    `}

    ${props => props.shape === 'rounded' && css`
        border-radius: 5px;
    `}

    ${props => props.shape === 'bullet' && css`
        border-radius: 35px;
    `}

    ${props => props.skin === 'primary' && css`
        ${props => props.color === 'primary' && css`
            color: ${props => props.theme.colors.themeColor};
        `}
        ${props => props.color !== 'primary' && css`
            color: ${props => props.color || props.theme.colors.white};
        `}
        
        background: ${props => props.bgcolor || props.theme.colors.themeColor};
        &:hover{
            color: ${props => props.color || props.theme.colors.white};
        }
        ${props => props.hover === 'true' && css`
            &:not(:disabled){
                &:hover, &:active, &:focus{
                    color: ${props => props.theme.colors.themeColor};
                    background: ${props => props.theme.colors.white};
                }
            }  
        `}
    `}   
    
    ${props => props.skin === 'light' && css`
        color: ${props => props.color || props.theme.colors.black};
        background: ${props => props.bgcolor || props.theme.colors.white};
        &:not(:disabled){
            &:hover, &:active, &:focus{
                color: ${props => props.theme.colors.black};
                ${props => props.hover && css`
                    ${props => props.hover.bgColor === 'secondary' && css`
                        background-color: ${props => props.theme.colors.secondary};
                        color: #fff;
                    `}
                `}
            }
            ${props => props.hover === 'true' && css`
                &:hover, &:active, &:focus{
                    color: ${props => props.theme.colors.white};
                    background: ${props => props.theme.colors.themeColor};
                }  
            `}
            ${props => props.hover === '2' && css`
                &:hover, &:active, &:focus{
                    transform: translateY(0);
                    color: ${props => props.theme.colors.white};
                    background: ${props => props.theme.colors.themeColor};
                }  
            `}
        }
    `}

    ${props => props.skin === 'secondary' && css`
        color: ${props => props.color || props.theme.colors.white};
        background: ${props => props.bgcolor || props.theme.colors.secondary};
        &:not(:disabled){
            &:hover, &:active, &:focus{
                color: ${props => props.theme.colors.white};
            }  
            ${props => props.hover && css`
                &:hover, &:active, &:focus{
                    ${props => props.hover.bgColor === 'primary' && css`
                        background-color: ${props => props.theme.colors.themeColor};
                    `}      
                }
            `}
        }
    `}

    ${props => props.skin === 'success' && css`
        color: ${props => props.color || props.theme.colors.white};
        background: ${props => props.bgcolor || props.theme.colors.success};
    `}

    ${props => props.skin === 'danger' && css`
        color: ${props => props.color || props.theme.colors.white};
        background: ${props => props.bgcolor || props.theme.colors.danger};
    `}

    ${props => props.skin === 'info' && css`
        color: ${props => props.color || props.theme.colors.white};
        background: ${props => props.bgcolor || props.theme.colors.info};
    `}

    ${props => props.skin === 'warning' && css`
        color: ${props => props.color || props.theme.colors.white};
        background: ${props => props.bgcolor || props.theme.colors.warning};
    `}

    ${props => props.skin === 'transparent' && css`
        color: ${props => props.color || props.theme.colors.black};
        background: transparent;
    `}

    ${props => props.skin === 'gradient' && css`
        color: ${props => props.color || props.theme.colors.white};
        background-image: linear-gradient(150deg, #FF3F85 0, #FAA720 100%);
        &:not(:disabled){
            &:hover, &:active, &:focus{
                color: ${props => props.theme.colors.white};
            } 
        }
    `}

    ${props => props.size === 'large' && css`
        padding: 0 40px;
        height: 64px;
        line-height: 64px;
        font-size: 16px;
    `}
    ${props => props.size === 'medium' && css`
        line-height: 54px;
        height: 54px;
    `}
    ${props => props.size === 'small' && css`
        padding: 0 30px;
        height: 48px;
        line-height: 48px;
        font-size: 14px;
    `}
    ${props => props.size === 'xsmall' && css`
        height: ${props => props.height || '40px'};
        line-height: ${props => props.lineheight || '40px'};
        font-size: ${props => props.fontSize || '13px'};
        padding: ${props => props.p || '0 20px'};
        ${props => props.shape === 'rounded' && css`
            border-radius: 3px;
        `}
    `}

    ${props => props.varient === 'onlyIcon' && css`
        width: ${props => props.width || '25px'};
        height: ${props => props.height || '48px'};
        line-height: ${props => props.lineheight || '50px'};
        padding: 0;
        border: none;
        svg, i{
            margin: 0;
            font-size: 20px;
        }
    `}

    ${props => props.varient === 'outlined' && css`
        background: transparent;
        color: ${props => props.color || props.theme.colors.themeColor};
        border-color: ${props => props.bordercolor || props.theme.colors.themeColor};
        border-width: ${props => props.borderwidth};
        ${props => props.skin === 'primary' && css`
            &:not(:disabled){
                &:hover{
                    background: ${props => props.theme.colors.themeColor};
                    color: ${props => props.theme.colors.white};
                    border-color: transparent;
                }
            }
        `}
    `}


    ${props => props.varient === 'texted' && css`
        background: transparent;
        color: ${props => props.color || props.theme.colors.themeColor};
        border-radius: 0;
        margin: ${props => props.m || 0};
        padding: ${props => props.p || 0};
        padding-top: ${props => props.pt || 0};
        padding-bottom: ${props => props.pb || 0};
        padding-left: ${props => props.pl || 0};
        padding-right: ${props => props.pr || 0};
        height: ${props => props.height || 'auto'};
        width: ${props => props.width || 'auto'};
        line-height: 1;
        &:not(:disabled){
            ${props => props.skin === 'primary' && css`
                
                &:hover{
                    background: transparent;
                    color: ${props => props.theme.colors.secondary};
                }
            `}
            ${props => props.hover === 2 && css`
                &:hover{
                    transform: translateY(0)
                }
            `}
        }
    `}

    ${props => props.imgbutton && css`
        background: none;
        border: none;
        padding: 0;
        height: auto;
        line-height: 1;
        img{
            border-radius: 5px;
        }
    `}

    ${props => props.stickyBtn && css`
        background: transparent;
        color: #333;
        border-color: #086AD8;
        height: 43px;
        line-height: 42px;
        color: ${props => props.theme.colors.themeColor};
    `}

    ${props => props.disabled && css`
        opacity: .5;
        cursor: not-allowed;
    `}
 
    ${props => props.responsive && css`
        ${props => props.responsive.xlarge && css`
            @media ${device.xlarge}{
                margin-top: ${props => props.responsive.xlarge.mt};
                margin-bottom: ${props => props.responsive.xlarge.mb};
                margin-left: ${props => props.responsive.xlarge.ml};
                margin-right: ${props => props.responsive.xlarge.mr};
                padding-top: ${props => props.responsive.xlarge.pt};
                padding-bottom: ${props => props.responsive.xlarge.pb};
                padding-left: ${props => props.responsive.xlarge.pl};
                padding-right: ${props => props.responsive.xlarge.pr};
            }
        `}
        ${props => props.responsive.large && css`
            @media ${device.large}{
                margin-top: ${props => props.responsive.large.mt};
                margin-bottom: ${props => props.responsive.large.mb};
                margin-left: ${props => props.responsive.large.ml};
                margin-right: ${props => props.responsive.large.mr};
                padding-top: ${props => props.responsive.large.pt};
                padding-bottom: ${props => props.responsive.large.pb};
                padding-left: ${props => props.responsive.large.pl};
                padding-right: ${props => props.responsive.large.pr};
            }
        `}
        ${props => props.responsive.medium && css`
            @media ${device.medium}{
                margin-top: ${props => props.responsive.medium.mt};
                margin-bottom: ${props => props.responsive.medium.mb};
                margin-left: ${props => props.responsive.medium.ml};
                margin-right: ${props => props.responsive.medium.mr};
                padding-top: ${props => props.responsive.medium.pt};
                padding-bottom: ${props => props.responsive.medium.pb};
                padding-left: ${props => props.responsive.medium.pl};
                padding-right: ${props => props.responsive.medium.pr};
            }
        `}
        ${props => props.responsive.small && css`
            @media ${device.small}{
                margin-top: ${props => props.responsive.small.mt};
                margin-bottom: ${props => props.responsive.small.mb};
                margin-left: ${props => props.responsive.small.ml};
                margin-right: ${props => props.responsive.small.mr};
                padding-top: ${props => props.responsive.small.pt};
                padding-bottom: ${props => props.responsive.small.pb};
                padding-left: ${props => props.responsive.small.pl};
                padding-right: ${props => props.responsive.small.pr};
            }
        `}
        ${props => props.responsive.xsmall && css`
            @media ${device.xsmall}{
                margin: ${props => props.responsive.xsmall.m};
                margin-top: ${props => props.responsive.xsmall.mt};
                margin-bottom: ${props => props.responsive.xsmall.mb};
                margin-left: ${props => props.responsive.xsmall.ml};
                margin-right: ${props => props.responsive.xsmall.mr};
                padding-top: ${props => props.responsive.xsmall.pt};
                padding-bottom: ${props => props.responsive.xsmall.pb};
                padding-left: ${props => props.responsive.xsmall.pl};
                padding-right: ${props => props.responsive.xsmall.pr};
            }
        `}
    `}
`

export const ButtonWrap = styled.button`
    ${ButtonStyled}
`;

export const AnchorButton = styled.a`
    ${ButtonStyled}
`;

export const HashButton = styled(AnchorLink)`
    ${ButtonStyled}
`;

