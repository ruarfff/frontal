import styled, { css } from "styled-components";
import { device } from "@theme";

export const SectionTitleWrap = styled.div`
    text-align: ${props => props.align};
    margin-bottom: ${props => props.mb};
    ${props => props.responsive && css`
        ${props => props.responsive.medium && css`
            @media ${device.medium}{
                margin-bottom: ${props => props.responsive.medium.mb};
                text-align: ${props => props.responsive.medium.align};
            }
        `}
        ${props => props.responsive.small && css`
            @media ${device.small}{
                margin-bottom: ${props => props.responsive.small.mb};
                text-align: ${props => props.responsive.small.align};
            }
        `}
    `}
    h6{
        color: #ababab;
        font-weight: 400;
        ${props => props.layout === 1 && css`
            margin-top: -5px;
            margin-bottom: 20px;
            text-transform: uppercase;
            font-size: 14px;
            letter-spacing: 3px;
            line-height: 1.43;
        `}
        ${props => props.layout === 2 && css`
            font-size: 18px;
        `}
    }
    h3{
        ${props => props.layout === 2 && css`
            margin-bottom: 20px;
        `}
        span{
            color: ${props => props.theme.colors.themeColor};
        }
    }
`;