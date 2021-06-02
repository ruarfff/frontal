import styled, { css } from "styled-components";
import Anchor from "@ui/anchor";
import Heading from "@ui/heading";
import Text from "@ui/text";
import { device } from "@theme";

export const BoxLargeImgInner = styled.div`
    overflow: hidden;
    position: relative;
    height: 100%;
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    ${props => props.responsive && css`
        ${props => props.responsive.medium && css`
            @media ${device.medium}{
                margin-top: ${props => props.responsive.medium.mt};
                margin-bottom: ${props => props.responsive.medium.mb};
            }
        `}
    `}
`;

export const BoxLargeImgMedia = styled.div`
    position: relative;
    transition: ${props => props.theme.transition};
    img{
        width: 100%;
    }
`;

export const BoxLargeImgContent = styled.div`
    padding: 32px 35px;
    padding-bottom: 0;
    text-align: center;
`;

export const HeadingWrap = styled(Heading)`
    font-weight: ${props => props.fontweight || 500};
    line-height: ${props => props.lineHeight || 1.25};
    margin-bottom: ${props => props.mb || '12px'};
`;

export const TextWrap = styled(Text)`
    color: ${props => props.color || '#696969'};
`;

export const BoxLargeImgBtnWrap = styled.div``;

export const BoxLargeImgLink = styled(Anchor)`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
    opacity: 0;
    text-indent: -999999px;
`;

export const BoxLargeImgWrap = styled.div`
    transition: ${props => props.theme.transition};
    height: 100%;
    &:hover{
        ${BoxLargeImgMedia}{
            transform: translateY(-5px);
        }
        ${BoxLargeImgLink}{
            visibility: visible;
            opacity: 1;
        }
    }
`;