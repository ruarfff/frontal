import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import { device } from "@theme";

export const SectionWrap = styled(BackgroundImage)`
    padding-top: 120px;
    padding-bottom: 120px;
    background-color: #002fa6;
    background-size: auto !important;
    background-position: top right;
    &:before,
    &:after{
        background-size: auto !important;
        background-position: top right;
    }
    @media ${device.medium}{
        padding-top: 80px;
        padding-bottom: 80px;
    }
`;

export const ContactInfoBox = styled.div`
    text-align: center;
    @media ${device.medium}{
        margin-top: 45px;
    }
    .icon{
        font-size: 40px;
        color: #fff;
        margin-bottom: 14px;
    }
`;