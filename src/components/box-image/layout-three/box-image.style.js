import styled from "styled-components";
import { Link } from "gatsby";
import { device } from "@theme";

export const BoxImgInner = styled.div`
    max-width: 340px;
    margin: 0 auto;
`;

export const BoxImgMedia = styled.div`
    margin-bottom: 36px;
    transition: ${props => props.theme.transition};
`;

export const BoxImgContent = styled.div``;

export const HeadingWrap = styled.h5`
    font-weight: ${props => props.fontweight || 500};
    line-height: ${props => props.lineHeight || 1.67};
    margin-bottom: ${props => props.mb || 0};
    @media ${device.large}{
        font-size: 22px;
    }
    &:hover{
        color: ${props => props.theme.colors.themeColor};
    }
`;

export const TextWrap = styled.p`
    font-weight: ${props => props.fontweight};
    line-height: ${props => props.lineHeight};
    margin-bottom: ${props => props.mb};
    color: ${props => props.color || '#696969'};
`;

export const BoxImgLink = styled(Link)`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    text-indent: -999999px;
`;

export const BoxImgWrapper = styled.div`
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    position: relative;
    box-shadow: 0 0 41px rgba(0,0,0,0.03);
    background: #fff;
    padding: 40px 30px 65px;
    display: flex;
    flex-direction: column;
    height: 100%;
    &:hover{
        ${BoxImgLink}{
            opacity: 1;
            visibility: visible;
        }
        ${BoxImgMedia}{
            transform: translateY(-5px);
        }
        ${HeadingWrap}{
            color: ${props => props.theme.colors.themeColor};
        }
    }
`;