import styled from "styled-components";
import Heading from "@ui/heading";
import Text from "@ui/text";

export const BoxImgInner = styled.div`
    box-shadow: 0 18px 40px rgba(51,51,51,0.1);
    background: #ffffff;
    border-radius: 5px;
    padding: 50px 30px 63px;
    height: 100%;
    transition: ${props => props.theme.transition};
    z-index: 11;
    position: relative;
`;

export const BoxImgMedia = styled.figure`
    margin-bottom: 41px;
    position: relative;
`;

export const DefaultImage = styled.div``;
export const HoverImage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    transition: ${props => props.theme.transition};
`;

export const BoxImgContent = styled.div``;

export const HeadingWrap = styled(Heading)`
    font-weight: ${props => props.fontweight || 500};
    line-height: ${props => props.lineHeight || 1.25};
    margin-bottom: ${props => props.mb || '12px'};
    color: ${props => props.color};
`;

export const TextWrap = styled(Text)`
    font-weight: ${props => props.fontweight};
    line-height: ${props => props.lineHeight};
    margin-bottom: ${props => props.mb};
    color: ${props => props.color};
`;

export const BoxImgWrapper = styled.div`
    margin-top: ${props => props.mt};
    &:hover{
        ${BoxImgInner}{
            transform: translateY(-5px);
            background: #002FA6;
        }
        ${HeadingWrap},
        ${TextWrap}{
            color: #fff;
        }
        .button{
            color: #fff;
        }
        ${DefaultImage}{
            opacity: 0;
            visibility: hidden;
        }
        ${HoverImage}{
            opacity: 1;
            visibility: visible;
        }
    }
`;