import styled from "styled-components";
import { device } from "@theme";

export const TeamWrapper = styled.section`
    padding-top: 90px;
    padding-bottom: 65px;
    background: #F8F8F8;
    @media ${device.medium}{
        padding-top: 72px;
        padding-bottom: 41px;  
    }
    @media ${device.small}{
        padding-top: 52px;
        padding-bottom: 20px;  
    }
`;