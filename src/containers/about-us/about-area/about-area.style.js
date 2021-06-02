import styled from "styled-components";
import { device } from "@theme";

export const AboutWrapper = styled.section`
    padding-top: 100px;
    @media ${device.medium}{
        padding-top: 80px;
    }
    @media ${device.small}{
        padding-top: 60px;
    }
`;

export const LeftBox = styled.div`
    @media ${device.medium}{
        margin-bottom: 20px;
    }
`;

export const RightBox = styled.div``;