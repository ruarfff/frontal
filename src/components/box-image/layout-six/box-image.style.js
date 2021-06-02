import styled from "styled-components";
import Heading from "@ui/heading";
import Text from "@ui/text";

export const BoxImgInner = styled.div`
    box-shadow: 0 0 40px 5px rgba(51,51,51,0.1);
    background: #fff;
    border-radius: 5px;
    padding: 98px 35px 88px;
    overflow: hidden;
    position: relative;
    height: 100%;
    transition: ${props => props.theme.transition};
`;

export const BoxImgMediaWrap = styled.figure`
    position: relative;
    width: 162px;
    height: 162px;
    border-radius: 50%;
    margin: 0 auto 2px;
    text-align: center;
    &:before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: linear-gradient(160deg, #fbf7f4 0%, #fefdfd 100%);
        border-radius: 50%;
        transform: translateY(-46px);
    }
`;

export const DefaultImage = styled.div`
    position: relative;
    z-index: 2;
	.gatsby-image-wrapper {
		margin: 0 auto;
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
    color: ${props => props.color};
`;

export const BoxImgBtnWrap = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    height: 56px;
    line-height: 55px;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    border-top: 1px solid #eee;
    &:before{
        background-color: #086AD8;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transform: translateY(100%);
        transition: ${props => props.theme.transition};
        z-index: -1;
    }
`;

export const BoxImgWrapper = styled.div` 
    height: 100%;
    &:hover{
        ${BoxImgInner}{
            transform: translateY(-5px);
        }
        ${BoxImgBtnWrap}{
            &:before{
                transform: translateY(0);
            }
            a{
                color: #fff;
            }
        }
    }
`;