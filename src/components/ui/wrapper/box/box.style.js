import styled, { css } from "styled-components";
import { device } from "@theme";

export const Boxwrap = styled.div`
    background-color: ${props => props.bgColor};
    max-width: ${props => props.maxwidth};
    margin: ${props => props.m};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    margin-left: ${props => props.ml};
    margin-right: ${props => props.mr};
    padding-top: ${props => props.pt};
    padding-bottom: ${props => props.pb};
    padding-left: ${props => props.pl};
    padding-right: ${props => props.pr};
    text-align: ${props => props.textalign};
    position: ${props => props.position};
    border-radius: ${props => props.radius};
    left: ${props => props.left};
    top: ${props => props.top};
    transform: ${props => props.transform};
    display: ${props => props.display};
    justify-content: ${props => props.justifycontent};
    align-items: ${props => props.alignitems};
    flex-wrap: ${props => props.flexwrap};
    border-bottom: ${props => props.bb};
    width: ${props => props.width};
    flex-basis: ${props => props.flexbasis};
    ${props => props.border && css`
        ${props => props.border.right && css`
            border-right-width: ${props => props.border.right.width};
            border-right-style: ${props => props.border.right.style || 'solid'};
            border-right-color: ${props => props.border.right.color || props.theme.colors.borderColor};
        `}
        ${props => props.border.left && css`
            border-left-width: ${props => props.border.left.width};
            border-left-style: ${props => props.border.left.style || 'solid'};
            border-left-color: ${props => props.border.left.color || props.theme.colors.borderColor};
        `}
        ${props => props.border.top && css`
            border-top-width: ${props => props.border.top.width};
            border-top-style: ${props => props.border.top.style || 'solid'};
            border-top-color: ${props => props.border.top.color || props.theme.colors.borderColor};
        `}
        ${props => props.border.bottom && css`
            border-bottom-width: ${props => props.border.bottom.width};
            border-bottom-style: ${props => props.border.bottom.style || 'solid'};
            border-bottom-color: ${props => props.border.bottom.color || props.theme.colors.borderColor};
        `}
    `}

    ${props => props.img && css`
        img {
            border-radius: ${props => props.img.radius};
        }
    `}
    ${props => props.before && css`
        &:before{
            position: absolute;
            content: '';
            left: ${props => props.before.left};
            top: ${props => props.before.top};
            right: ${props => props.before.right};
            bottom: ${props => props.before.bottom};
            width: ${props => props.before.width};
            height: ${props => props.before.height};
            ${props => props.before.bgColor === 'border-color' && css`
                background-color: ${props => props.theme.colors.borderColor};
            `}
            ${props => props.before.bgColor === 'primary' && css`
                background-color: ${props => props.theme.colors.themeColor};
            `}
            ${props => props.before.bgColor === 'secondary' && css`
                background-color: ${props => props.theme.colors.secondary};
            `}
        }
    `}
    ${props => props.after && css`
        &:after{
            position: absolute;
            content: '';
            left: ${props => props.after.left};
            top: ${props => props.after.top};
            right: ${props => props.after.right};
            bottom: ${props => props.after.bottom};
            width: ${props => props.after.width};
            height: ${props => props.after.height};
            ${props => props.after.bgColor === 'border-color' && css`
                background-color: ${props => props.theme.colors.borderColor};
            `}
            ${props => props.after.bgColor === 'primary' && css`
                background-color: ${props => props.theme.colors.themeColor};
            `}
            ${props => props.after.bgColor === 'secondary' && css`
                background-color: ${props => props.theme.colors.secondary};
            `}
        }
    `}
    ${props => props.responsive && css`
        ${props => props.responsive.xlarge && css`
            @media ${device.xlarge}{
                max-width: ${props => props.responsive.xlarge.maxwidth};
                flex-basis: ${props => props.responsive.xlarge.flexbasis};
                text-align: ${props => props.responsive.xlarge.textalign};
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
                max-width: ${props => props.responsive.large.maxwidth};
                flex-basis: ${props => props.responsive.large.flexbasis};
                text-align: ${props => props.responsive.large.textalign};
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
                max-width: ${props => props.responsive.medium.maxwidth};
                flex-basis: ${props => props.responsive.medium.flexbasis};
                text-align: ${props => props.responsive.medium.textalign};
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
                max-width: ${props => props.responsive.small.maxwidth};
                flex-basis: ${props => props.responsive.small.flexbasis};
                text-align: ${props => props.responsive.small.textalign};
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
                max-width: ${props => props.responsive.xsmall.maxwidth};
                flex-basis: ${props => props.responsive.xsmall.flexbasis};
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
`;