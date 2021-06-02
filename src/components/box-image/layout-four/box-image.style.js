import styled from "styled-components";
import Heading from "@ui/heading";
import Text from "@ui/text";
import { Link } from "gatsby";

export const BoxImgInner = styled.div`
    box-shadow: 0 0 30px rgba(51,51,51,0.05);
    background: #fff;
    padding: 25px 30px 34px;
    height: 100%;
    transition: ${props => props.theme.transition};
`;

export const BoxImgMediaWrap = styled.div`
    margin-bottom: 9px;
`;

export const BoxImgContent = styled.div``;

export const HeadingWrap = styled(Heading)`
    font-weight: ${props => props.fontweight || 500};
    line-height: ${props => props.lineHeight || 1.67};
    margin-bottom: ${props => props.mb || 0};
`;

export const TextWrap = styled(Text)`
    color: ${props => props.color || '#696969'};
    font-weight: ${props => props.fontweight};
    line-height: ${props => props.lineHeight};
    margin-bottom: ${props => props.mb};
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
    height: 100%;
    &:hover{
        ${BoxImgLink}{
            opacity: 1;
            visibility: visible;
        }
        ${BoxImgInner}{
            transform: translateY(-5px);
        }
    }
`;