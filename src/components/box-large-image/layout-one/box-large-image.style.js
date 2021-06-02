import styled from "styled-components";
import Anchor from "@ui/anchor";
import Heading from "@ui/heading";
import Text from "@ui/text";

export const BoxLargeImgInner = styled.div`
    transition: ${props => props.theme.transition};
`;

export const BoxLargeImgMedia = styled.div`
    position: relative;
    border-radius: 5px;
    overflow: hidden;  
    text-align: center;
    img{
        width: 100%;
        transition: transform 1s;
    }
    &:after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        opacity: .5;
        background-image: linear-gradient(-180deg, transparent 39%, #1c0f69 100%);
    }
`;

export const BoxLargeImgBtnWrap = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    overflow: hidden;
    z-index: 3;
`;

export const BoxLargeImgBtnInner = styled.div`
    background: #fff;
    color: #086ad8;
    transform: translateY(100%);
    opacity: 0;
    transition: all 0.4s ease-in-out;
`;

export const BoxLargeImgHeading = styled.div`
    position: absolute;
    bottom: 30px;
    left: 0;
    right: 0;
    width: 250px;
    margin: 0 auto;
    z-index: 2;
    overflow: hidden;
    transition: ${props => props.theme.transition};
`;

export const BoxLargeImgContent = styled.div`
    margin-top: 30px;
`;

export const HeadingWrap = styled(Heading)`
    font-size: ${props => props.fontSize || '24px'};
    line-height: ${props => props.lineHeight || 1.5};
    color: ${props => props.color || '#fff'};
    font-weight: ${props => props.fontweight || 500};
`;

export const TextWrap = styled(Text)`
    color: ${props => props.color || '#7e7e7e'};
    text-align: ${props => props.align || 'center'};
`;

export const BoxLargeImgLink = styled(Anchor)`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    z-index: 2;
    text-indent: -999999px;
`;

export const BoxLargeImgWrap = styled.div`
    max-width: 370px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    ${BoxLargeImgInner}{
        height: 100%;
    }
    &:hover{
        ${BoxLargeImgInner}{
            transform: translateY(-5px);
        }
        ${BoxLargeImgMedia}{
            &:after{
                background: #002fa6;
                opacity: .8;
            }
        }
        ${BoxLargeImgBtnInner}{
            transform: translateY(0);
            opacity: 1;
        }
        ${BoxLargeImgHeading}{
            transform: translateY(-100%);
            opacity: 0;
        }
        ${BoxLargeImgLink}{
            opacity: 1;
            visibility: visible;
        }
    }
`;
