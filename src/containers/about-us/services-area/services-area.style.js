import styled from "styled-components";
import { device } from "@theme";

export const ServicesWrapper = styled.section`
    padding-top: 93px;
    padding-bottom: 100px;
    @media ${device.medium}{
        padding-top: 72px;
        padding-bottom: 80px;
    }
    @media ${device.small}{
        padding-top: 52px;
        padding-bottom: 57px;
    }
`;