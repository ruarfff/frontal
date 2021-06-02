import styled from "styled-components";
import { device } from "@theme";

export const TestimonialWrapper = styled.section`
    padding-top: 100px;
    padding-bottom: 100px;
    background-color: #F8F8F8;
    @media ${device.medium}{
        padding-top: 80px;
        padding-bottom: 80px;
    }
    @media ${device.small}{
        padding-top: 60px;
        padding-bottom: 60px;
    }
`;