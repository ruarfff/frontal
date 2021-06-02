import styled, { css } from "styled-components";
import { device } from "@theme";


export const TeamMemberInner = styled.div`
    margin-left: auto;
    margin-right: auto;
    @media ${device.small}{
        .gatsby-image-wrapper {
            max-width: 100% !important;
        }
    }
`;

export const TeamMemberImage = styled.div`
    position: relative;
`;

export const TeamMemberSocialWrap = styled.div`
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    padding: 11px 0;
    opacity: 0;
    visibility: hidden;
    text-align: center;
    background-color: #002FA6;
    transition: ${props => props.theme.transition};
`;

export const TeamMemberInfo = styled.div`
    margin-top: 20px;
    text-align: ${props => props.textalign};
`;

export const TeamMemberName = styled.h5`
    font-size: ${props => props.fontSize};
    line-height: ${props => props.lineHeight};
`;

export const TeamMemberDesignation = styled.p``;

export const TeamMemberWrap = styled.div`
    ${props => props.layout === 1 && css`
        ${TeamMemberInner}{
            max-width: 310px;
        }
    `}
    ${TeamMemberInner}{
        margin-bottom: ${props => props.mb};
        ${props => props.responsive && css`
            ${props => props.responsive.small && css`
                @media ${device.small}{
                    margin-bottom: ${props => props.responsive.small.mb};
                }
            `}
        `}
    }
    &:hover{
        ${TeamMemberSocialWrap}{
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
    }
`;
