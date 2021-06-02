import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import { device } from "@theme";

export const SectionWrap = styled(BackgroundImage)`
    padding-top: 100px;
    padding-bottom: 100px;
    background-color: #002fa6;
    background-position: left bottom !important;
    background-size: auto !important;
    @media ${device.medium}{
        padding-top: 80px;
        padding-bottom: 80px;
    }
    @media ${device.small}{
        padding-top: 60px;
        padding-bottom: 60px;
    }
`;

export const ContactInfoBox = styled.div`
    @media ${device.medium}{
        margin-bottom: 45px;
    }
`;

export const ContactFormBox = styled.div`
    background: #fff;
    box-shadow: 0 2px 30px rgba(0, 0, 0, 0.1);
    padding: 42px 50px 50px;
    border-radius: 5px;
    text-align: center;
    @media ${device.small}{
        padding: 32px 20px 40px;
    }
`;

export const ContactFormTitle = styled.div`
    margin-bottom: 40px;
`;