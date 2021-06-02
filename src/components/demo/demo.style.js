import styled from "styled-components";
import Anchor from '../ui/anchor'

export const PreviewWrap = styled.div`
    text-align: center;
    margin-top: 40px;
`;

export const FrameScreen = styled.div`
    position: relative;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 70px 40px -35px rgba(51,51,51,0.13);
`;

export const Dots = styled.div`
    display: flex;
    align-items: center;
    padding-left: 14px;
    height: 23px;
    .dot{
        margin: 0 4px;
        width: 9px;
        height: 9px;
        border-radius: 50%;
        background: #dadada;
    }
`;

export const PreviewThumb = styled.div`
    position: relative;
`;

export const PreviewOverlay = styled.div`
    background-color: rgba(8,106,216,0.9);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    visibility: hidden;
    opacity: 0;
    transition: ${props => props.theme.transition};
`;

export const PreviewLink = styled(Anchor)`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    visibility: hidden;
    opacity: 0;
    text-indent: -9999999px;
`;

export const ButtonWrap = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const PreviewInfo = styled.div`

`;

export const HeadingWrap = styled.h6`
    font-size: 16px;
    font-weight: 700;
    line-height: 1.87;
    padding: 14px 27px;
    margin-bottom: 0;
    text-align: left;
`;

export const PreviewInner = styled.div`
    transition: ${props => props.theme.transition};
    &:hover{
        transform: translateY(-5px);
        ${PreviewOverlay},
        ${PreviewLink}{
            visibility: visible;
            opacity: 1;
        }
    }
`;