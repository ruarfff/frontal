import styled from "styled-components";
import { device } from "@theme";

export const SectionWrap = styled.div`
    padding-bottom: 70px;
    @media ${device.medium}{
        padding-bottom: 50px;
    }
    @media ${device.small}{
        padding-bottom: 30px;
    }
`;

export const ProgressCircleWrap = styled.div`
    margin-bottom: 30px;
`;