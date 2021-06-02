import styled from "styled-components";
import { device } from "@theme";

export const SectionWrap = styled.section`
    padding-bottom: 92px;
    @media ${device.medium}{
        padding-bottom: 80px;
    }
    @media ${device.small}{
        margin-bottom: 60px;
    }
`;

export const ProgressOneWrap = styled.div`
    margin-bottom: 50px;
    @media ${device.small}{
        margin-bottom: 40px;
    }
`;

export const ProgressTwoWrap = styled.div``;