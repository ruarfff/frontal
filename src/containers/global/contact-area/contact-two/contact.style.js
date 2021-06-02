import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import { device } from "@theme";

export const SectionWrap = styled(BackgroundImage)`
    padding-top: 100px;
    background-color: #eff2f6;
    @media ${device.medium}{
        padding-top: 75px;
    }
`;

export const ImageBox = styled.div`
    @media ${device.medium}{
        margin-bottom: 57px;
    }
`;

export const ContactInfoBox = styled.div`
    @media ${device.medium}{
        margin-bottom: 45px;
    }
`;