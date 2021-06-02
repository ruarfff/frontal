import styled from "styled-components";
import { device } from "@theme";

export const ContactInfoWrapper = styled.div`
    padding-bottom: 95px;
    @media ${device.medium}{
        padding-bottom: 75px;
    }
    @media ${device.small}{
        padding-bottom: 55px;
    }
`;

export const InfoBoxWrap = styled.div`
    margin-top: 30px;
`;

export const InfoBox = styled.div``;