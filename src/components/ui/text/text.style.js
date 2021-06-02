import styled, { css } from "styled-components";
import { device } from "@theme";


export const TextWrapper = styled.p`
    ${props => props.color === 'primary' && css`
        color: ${props => props.theme.colors.themeColor};
    `}
    ${props => props.color === 'secondary' && css`
        color: ${props => props.theme.colors.secondary};
    `}
    ${props => props.color === 'headingColor' && css`
        color: ${props => props.theme.colors.headingColor};
    `}
    ${props => (props.color !== 'primary' & props.color !== 'secondary' & props.color !== 'headingColor') && css`
        color: ${props => props.color || props.theme.colors.textColor};
    `};
    font-size: ${props => props.fontSize};
    text-align: ${props => props.align};
    line-height: ${props => props.lineHeight};
    max-width: ${props => props.maxwidth};
    font-weight: ${props => props.fontweight};
    padding-top: ${props => props.pt};
    padding-bottom: ${props => props.pb};
    margin: ${props => props.m};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    margin-left: ${props => props.ml};
    margin-right: ${props => props.mr};
    ${props => props.responsive && css`
        ${props => props.responsive.xlarge && css`
            @media ${device.xlarge}{
                font-size: ${props => props.responsive.xlarge.fontSize};
                text-align: ${props => props.responsive.xlarge.align};
                line-height: ${props => props.responsive.xlarge.lineHeight};
                max-width: ${props => props.responsive.xlarge.maxwidth};
                font-weight: ${props => props.responsive.xlarge.font2eight};
                padding-top: ${props => props.responsive.xlarge.pt};
                padding-bottom: ${props => props.responsive.xlarge.pb};
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
                text-align: ${props => props.responsive.large.align};
                line-height: ${props => props.responsive.large.lineHeight};
                max-width: ${props => props.responsive.large.maxwidth};
                font-weight: ${props => props.responsive.large.font2eight};
                padding-top: ${props => props.responsive.large.pt};
                padding-bottom: ${props => props.responsive.large.pb};
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
                text-align: ${props => props.responsive.medium.align};
                line-height: ${props => props.responsive.medium.lineHeight};
                max-width: ${props => props.responsive.medium.maxwidth};
                font-weight: ${props => props.responsive.medium.font2eight};
                padding-top: ${props => props.responsive.medium.pt};
                padding-bottom: ${props => props.responsive.medium.pb};
                margin: ${props => props.responsive.medium.m};
                margin-top: ${props => props.responsive.medium.mt};
                margin-bottom: ${props => props.responsive.medium.mb};
                margin-left: ${props => props.responsive.medium.ml};
                margin-right: ${props => props.responsive.medium.mr};
            }        
        `}
        ${props => props.responsive.small && css`
            @media ${device.small}{
                font-size: ${props => props.responsive.small.fontSize};
                text-align: ${props => props.responsive.small.align};
                line-height: ${props => props.responsive.small.lineHeight};
                max-width: ${props => props.responsive.small.maxwidth};
                font-weight: ${props => props.responsive.small.font2eight};
                padding-top: ${props => props.responsive.small.pt};
                padding-bottom: ${props => props.responsive.small.pb};
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
                text-align: ${props => props.responsive.xsmall.align};
                line-height: ${props => props.responsive.xsmall.lineHeight};
                max-width: ${props => props.responsive.xsmall.maxwidth};
                font-weight: ${props => props.responsive.xsmall.font2eight};
                padding-top: ${props => props.responsive.xsmall.pt};
                padding-bottom: ${props => props.responsive.xsmall.pb};
                margin: ${props => props.responsive.xsmall.m};
                margin-top: ${props => props.responsive.xsmall.mt};
                margin-bottom: ${props => props.responsive.xsmall.mb};
                margin-left: ${props => props.responsive.xsmall.ml};
                margin-right: ${props => props.responsive.xsmall.mr};
            }
        `}
    `}
`;