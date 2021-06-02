import styled from "styled-components";
import { device } from "@theme";
import Heading from "@ui/heading";
import Text from "@ui/text";

export const BoxImgInner = styled.div`
    padding: 30px 35px 31px;
    border-radius: 4px;
    transition: ${props => props.theme.transition};
    @media ${device.medium}{
        padding: 20px 30px 26px;
    }
`;

export const BoxImgMediaWrap = styled.figure`
    text-align: center;
    margin-bottom: 24px;
`;

export const DefaultImage = styled.div`
    position: relative;
    z-index: 2;
	.gatsby-image-wrapper {
		margin: 0 auto
	}
`;

export const BoxImgContent = styled.div`
    text-align: center;
`;

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
    color: ${props => props.color || '#696969'};
`;

export const BoxImgWrapper = styled.div`   
    &:hover{
        ${BoxImgInner}{
            transform: translateY(-5px);
            background: #fff;
            box-shadow: 0 18px 40px rgba(51,51,51,0.1);
        }
    }
`;



