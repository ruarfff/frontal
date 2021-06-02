import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import { device } from "@theme";

export const HeaderLayoutWrap = styled(BackgroundImage)`
    background-color: #f6f2ed;
    background-size: auto !important;
    background-position: bottom right !important;
    padding-bottom: 120px;
    padding-top: 120px;
    @media ${device.medium}{
        padding-top: 80px;
        padding-bottom: 80px;
    }
    @media ${device.medium}{
        padding-top: 60px;
        padding-bottom: 60px;
    }
`;

export const ImageWrap = styled.div`
    text-align: right;
    @media ${device.medium}{
        margin-top: 30px;
    }
`;

export const HeaderLayoutTextWrap = styled.div`
    max-width: 500px;
    width: 100%;
    margin: auto;
`;

export const ButtonWrap = styled.div`
    margin-top: 34px;
`;