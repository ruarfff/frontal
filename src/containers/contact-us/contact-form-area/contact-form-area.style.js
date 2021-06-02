import styled from "styled-components";
import { device } from "@theme";

export const ContactFormWrapper = styled.section`
    padding-top: 100px;
    padding-bottom: 64px;
    @media ${device.medium}{
        padding-top: 80px;
        padding-bottom: 44px;
    }
    @media ${device.small}{
        padding-top: 60px;
        padding-bottom: 25px;
    }
`;

export const LeftBox = styled.div`
    @media ${device.medium}{
        margin-bottom: 45px;
    }
`;