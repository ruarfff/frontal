import styled, { css } from "styled-components";
import { Link } from "gatsby";

export const LinkStyled = css`
    ${props => props.color === 'primary' && css`
        color: ${props => props.theme.colors.themeColor};
    `}
    ${props => props.color === 'secondary' && css`
        color: ${props => props.theme.colors.secondary};
    `}
    ${props => props.color === 'textColor' && css`
        color: ${props => props.theme.colors.textColor};
    `}
    ${props => props.color === 'headingColor' && css`
        color: ${props => props.theme.colors.headingColor};
    `}
    ${props => props.color !== 'primary' && props.color !== 'secondary' && props.color !== 'textColor' && props.color !== 'headingColor' && css`
        color: ${props => props.color || props.theme.colors.themeColor};
    `}
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontweight};
    text-transform: ${props => props.texttransform};
    text-align: ${props => props.align};
    line-height: ${props => props.lineheight};
    letter-spacing: ${props => props.letterspacing};
    padding-top: ${props => props.pt};
    padding-bottom: ${props => props.pb};
    padding-left: ${props => props.pl};
    padding-right: ${props => props.pr};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    margin-left: ${props => props.ml};
    margin-right: ${props => props.mr};
    max-width: ${props => props.maxWidth};
    font-weight: ${props => props.fontWeight};
    border-bottom: ${props => props.borderbottom};
    display: ${props => props.display};
    ${props => props.layout === 'underline' && css`
        border-bottom: 1px solid #ccc;
    `}
    ${props => props.border && css`        
        ${props => props.border.bottom && css`
            border-bottom-width: ${props => props.border.bottom.width || '1px'};
            border-bottom-style: ${props => props.border.bottom.style || 'solid'};
            ${props => props.border.bottom.color === 'secondary' && css`
                border-bottom-color: ${props => props.theme.colors.secondary};
            `}
            ${props => props.border.bottom.color !== 'secondary' && css`
                border-bottom-color: ${props => props.border.bottom.color || props.theme.colors.borderColor};
            `}
        `}
    `}
    .icon{
        font-size: 26px;
    }
    ${props => props.hover && css`
        &:hover{
            ${props => props.hover.color === 'primary' && css`
                color: ${props => props.theme.colors.themeColor};
            `}
            ${props => props.hover.color === 'secondary' && css`
                color: ${props => props.theme.colors.secondary};
            `}
            ${props => props.hover.color === 'textColor' && css`
                color: ${props => props.theme.colors.textColor};
            `}
            ${props => props.hover.color === 'headingColor' && css`
                color: ${props => props.theme.colors.headingColor};
            `}
            ${props => props.color !== 'primary' && props.color !== 'secondary' && props.color !== 'textColor' && props.color !== 'headingColor' && css`
                color: ${props => props.hover.color || props.theme.colors.themeColor};
            `}
        }
        
        ${props => props.hover.layout === 2 && css`
            position: relative;
            &:before{
                transition: ${props => props.theme.transition};
                content: '';
                position: absolute;
                bottom: -1px;
                right: 0;
                width: 0;
                height: 1px;
                ${props => props.color === 'primary' && css`
                    background-color: ${props => props.theme.colors.themeColor};
                `}
                ${props => props.color === 'secondary' && css`
                    background-color: ${props => props.theme.colors.secondary};
                `}
                ${props => props.color === 'textColor' && css`
                    background-color: ${props => props.theme.colors.textColor};
                `}
                ${props => props.color === 'headingColor' && css`
                    background-color: ${props => props.theme.colors.headingColor};
                `}
                ${props => props.color !== 'primary' && props.color !== 'secondary' && props.color !== 'textColor' && props.color !== 'headingColor' && css`
                    background-color: ${props => props.color || props.theme.colors.themeColor};
                `}
                ${props => !props.color && css`
                    background-color: ${props => props.theme.colors.themeColor};
                `}
            }
            &:hover:before{
                left: 0;
                width: 100%;
                right: auto;
            }
        `}
    `}

    &.image-btn{
        border-radius: 5px;
        box-shadow: 0 0 20px rgba(51,51,51,0.1);
        overflow: hidden;
    }
`;

export const LinkWrapper = styled(Link)`
    ${LinkStyled}
`;

export const AnchorTag = styled.a`
    ${LinkStyled}
`;