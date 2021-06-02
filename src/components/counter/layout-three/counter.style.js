import styled, { css } from "styled-components";
import { device } from "@theme";


export const FunFactWrap = styled.div`
    text-align: center;
    margin-bottom: ${props => props.mb || '30px'};
    ${props => props.responsive && css`
        ${props => props.responsive.medium && css`
            @media ${device.medium}{
                margin-bottom: ${props => props.responsive.medium.mb};
                margin-top: ${props => props.responsive.medium.mt};
            }
        `}
    `}
`;

export const FunFactTitle = styled.h5`
    color: ${props => props.theme.colors.themeColorBlack};
    font-weight: 500;
    margin-bottom: 10px;
`;

export const FunFactCount = styled.div`
    font-size: ${props => props.fontSize || '56px'};
    font-weight: ${props => props.fontweight || 400};
    line-height: ${props => props.lineHeight || 1};
    color: ${props => props.color || props.theme.colors.themeColor};
    margin-bottom: ${props => props.mb || '19px'};
    @media ${device.large}{
        font-size: 50px;
    }
    @media ${device.medium}{
        font-size: 40px;
    }
    @media ${device.small}{
        font-size: 34px;
    }
`;

export const FunFactText = styled.h6`
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: ${props => props.color || '#7e7e7e'};
`;

