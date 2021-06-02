import styled from "styled-components";
import { device } from "@theme";

export const TestimonialWrappper = styled.section`
    padding-top: 120px;
    padding-bottom: 120px;
    padding-left: 65px;
    padding-right: 65px;
    background-color: #f6f2ed;
    @media ${device.xlarge}{
        padding-left: 25px;
        padding-right: 25px;
    }
    @media ${device.medium}{
        padding-top: 80px;
        padding-bottom: 80px;
    }
    @media ${device.small}{
        padding-top: 60px;
        padding-bottom: 60px;
        padding-left: 15px;
        padding-right: 15px;
    }
`;