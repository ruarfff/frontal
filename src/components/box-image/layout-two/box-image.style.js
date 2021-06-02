import styled from "styled-components";
import Heading from "@ui/heading";
import { device } from "@theme";
import { Link } from "gatsby";

export const BoxImgInner = styled.div`
    box-shadow: 0 0 40px 5px rgba(51,51,51,0.1);
    background: #fff;
    border-radius: 5px;
    padding:  30px 38px;
    min-height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${device.small}{
        padding:  30px;
    }
`;

export const BoxImgMedia = styled.div`
    flex-shrink: 0;
    margin-right: 30px;
`;

export const BoxImgContent = styled.div``;

export const HeadingWrap = styled(Heading)`
    font-weight: 500;
    line-height: 1.67;
    margin-bottom: 0;
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
    &:hover{
        ${BoxImgLink}{
            opacity: 1;
            visibility: visible;
        }
    }
`;