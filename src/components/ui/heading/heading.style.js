import styled, { css } from "styled-components";
import { device } from "@theme";

export const HeadingWrapper = styled.h2`
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontweight};
    ${props => props.color === 'primary' && css`
        color: ${props => props.theme.colors.themeColor};
    `}
    ${props => props.color === 'secondary' && css`
        color: ${props => props.theme.colors.secondary};
    `}
    ${props => props.color === 'textColor' && css`
        color: ${props => props.theme.colors.textColor};
    `}
    ${props => (props.color !== 'primary' & props.color !== 'secondary' & props.color !== 'textColor') && css`
        color: ${props => props.color || props.theme.colors.headingColor};
    `}
    position: ${props => props.position};
    line-height: ${props => props.lineHeight};
    text-align: ${props => props.textalign};
    letter-spacing: ${props => props.letterspacing};
    text-transform: ${props => props.texttransform};
    display: ${props => props.display};
    align-items: ${props => props.alignitems}; 
    margin: ${props => props.m};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    margin-left: ${props => props.ml};
    margin-right: ${props => props.mr};
    padding-left: ${props => props.pl};
    word-wrap: ${props => props.wordwrap};
    max-width: ${props => props.maxwidth};

    ${props => props.child && css`
        & > * {
            ${props => props.child.color === 'primary' && css`
                color: ${props => props.theme.colors.themeColor};
            `}
            ${props => props.child.color === 'secondary' && css`
                color: ${props => props.theme.colors.secondary};
            `}
            ${props => (props.child.color !== 'primary' & props.child.color !== 'secondary') && css`
                color: ${props => props.child.color || props.theme.colors.headingColor};
            `}
        }
    `}

    ${props => props.before && css`
        &:before{
            position: absolute;
            content: '';
            left: ${props => props.before.left || 0};
            top: ${props => props.before.top || 0};
            width: ${props => props.before.width};
            height: ${props => props.before.height};
            font-size: ${props => props.before.fontSize};
            transform: ${props => props.before.transform};
            ${props => props.before.bgColor === 'primary' && css`
                background-color: ${props => props.theme.colors.themeColor};
            `}
            ${props => props.before.bgColor === 'secondary' && css`
                background-color: ${props => props.theme.colors.secondary};
            `}
            ${props => (props.before.bgColor !== 'primary' && props.before.bgColor !== 'secondary') && css`
                background-color: ${props => props.before.bgColor || props.theme.colors.headingColor};
            `}
            ${props => props.before.color === 'primary' && css`
                color: ${props => props.theme.colors.themeColor};
            `}
            ${props => props.before.color === 'secondary' && css`
                color: ${props => props.theme.colors.secondary};
            `}
            ${props => (props.before.color !== 'primary' & props.before.color !== 'secondary') && css`
                color: ${props => props.before.color || props.theme.colors.headingColor};
            `}
            ${props => props.before.fontfamily === 'fontAwesomePro' && css`
                font-family: ${props => props.theme.fontFamily.fontAwesomePro};
            `}
        }
    `}

    ${props => props.layout === "highlight" && css`
        font-size: 12px;
        line-height: 2em;
        letter-spacing: 2px;
        color: #ababab;
        display: flex;
        align-items: flex-end;
        text-transform: uppercase;
        mark {
            font-size: 180px;
            line-height: .8;
            font-weight: 900;
            margin: 0 5px -5px -5px;
            color: ${props => props.theme.colors.secondary};
            @media ${device.small}{
                font-size: 140px;
            }
        }
    `}

    ${props => props.layout === 'quote' && css`
        &:before{
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            width: 4px;
            height: 94%;
            transform: translateY(-50%);
            background-color: ${props => props.theme.colors.secondary};
        }
    `}

    ${props => props.responsive && css`
        ${props => props.responsive.xlarge && css`
            @media ${device.xlarge}{
                font-size: ${props => props.responsive.xlarge.fontSize};
                line-height: ${props => props.responsive.xlarge.lineHeight};
                letter-spacing: ${props => props.responsive.xlarge.letterspacing};
                text-transform: ${props => props.responsive.xlarge.texttransform};
                display: ${props => props.responsive.xlarge.display};
                align-items: ${props => props.responsive.xlarge.alignitems}; 
                margin: ${props => props.responsive.xlarge.m};
                margin-top: ${props => props.responsive.xlarge.mt};
                margin-bottom: ${props => props.responsive.xlarge.mb};
                margin-left: ${props => props.responsive.xlarge.ml};
                margin-right: ${props => props.responsive.xlarge.mr};
            }        
        `}
        ${props => props.responsive.large && css`
            @media ${device.large}{
                font-size: ${props => props.responsive.large.fontSize};
                line-height: ${props => props.responsive.large.lineHeight};
                letter-spacing: ${props => props.responsive.large.letterspacing};
                text-transform: ${props => props.responsive.large.texttransform};
                display: ${props => props.responsive.large.display};
                align-items: ${props => props.responsive.large.alignitems}; 
                margin: ${props => props.responsive.large.m};
                margin-top: ${props => props.responsive.large.mt};
                margin-bottom: ${props => props.responsive.large.mb};
                margin-left: ${props => props.responsive.large.ml};
                margin-right: ${props => props.responsive.large.mr};
            }     
        `}
        ${props => props.responsive.medium && css`
            @media ${device.medium}{
                font-size: ${props => props.responsive.medium.fontSize};
                line-height: ${props => props.responsive.medium.lineHeight};
                letter-spacing: ${props => props.responsive.medium.letterspacing};
                text-transform: ${props => props.responsive.medium.texttransform};
                display: ${props => props.responsive.medium.display};
                align-items: ${props => props.responsive.medium.alignitems}; 
                margin: ${props => props.responsive.medium.m};
                margin-top: ${props => props.responsive.medium.mt};
                margin-bottom: ${props => props.responsive.medium.mb};
                margin-left: ${props => props.responsive.medium.ml};
                margin-right: ${props => props.responsive.medium.mr};
                max-width: ${props => props.responsive.medium.maxwidth};
            }
        `}
        ${props => props.responsive.small && css`
            @media ${device.small}{
                font-size: ${props => props.responsive.small.fontSize};
                line-height: ${props => props.responsive.small.lineHeight};
                letter-spacing: ${props => props.responsive.small.letterspacing};
                text-transform: ${props => props.responsive.small.texttransform};
                display: ${props => props.responsive.small.display};
                align-items: ${props => props.responsive.small.alignitems}; 
                margin: ${props => props.responsive.small.m};
                margin-top: ${props => props.responsive.small.mt};
                margin-bottom: ${props => props.responsive.small.mb};
                margin-left: ${props => props.responsive.small.ml};
                margin-right: ${props => props.responsive.small.mr};
            }
        `}
        ${props => props.responsive.xsmall && css`
            @media ${device.xsmall}{
                font-size: ${props => props.responsive.xsmall.fontSize};
                line-height: ${props => props.responsive.xsmall.lineHeight};
                letter-spacing: ${props => props.responsive.xsmall.letterspacing};
                text-transform: ${props => props.responsive.xsmall.texttransform};
                display: ${props => props.responsive.xsmall.display};
                align-items: ${props => props.responsive.xsmall.alignitems}; 
                margin: ${props => props.responsive.xsmall.m};
                margin-top: ${props => props.responsive.xsmall.mt};
                margin-bottom: ${props => props.responsive.xsmall.mb};
                margin-left: ${props => props.responsive.xsmall.ml};
                margin-right: ${props => props.responsive.xsmall.mr};
            }
        `}
    `}
`;