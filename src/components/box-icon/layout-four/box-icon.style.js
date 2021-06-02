import styled, { css } from "styled-components";
import { device } from "@theme";

export const BoxIconWrap = styled.div`
    padding-left: ${props => props.pl};
    margin-top: ${props => props.mt};
    display: flex;
    align-items: ${props => props.alignitems};
`;

export const BoxIconMarker = styled.div`
    margin-right: ${props => props.mr || '18px'};
    svg, i{
        font-weight: ${props => props.fontweight || 400};
        color: ${props => props.color || props.theme.colors.secondary};    
        font-size: ${props => props.fontSize || '24px'};
        line-height: 1;
    }
`;

export const BoxIconInfo = styled.div``;

export const BoxIconTitle = styled.h5`
    ${props => props.color === 'secondary' && css`
        color: ${props => props.theme.colors.secondary};
    `}
    ${props => props.color !== 'secondary' && css`
        color: ${props => props.color || props.theme.colors.themeColor};
    `}
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontweight};
    line-height: ${props => props.lineHeight};
    margin-bottom: ${props => props.mb};
    ${props => props.responsive && css`
        ${props => props.responsive.large && css`
            @media ${device.large}{
                font-size: ${props => props.responsive.large.fontSize};
            }
        `}
        ${props => props.responsive.medium && css`
            @media ${device.medium}{
                font-size: ${props => props.responsive.medium.fontSize};
            }
        `}
    `}
`;

export const BoxIconHeading = styled.h6`
    font-size: 15px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;
    line-height: 1.78;
    margin-bottom: 13px;
    color: ${props => props.color};
`;

export const BoxIconDesc = styled.p``;