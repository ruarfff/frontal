import styled from "styled-components";
import { device } from "@theme";

export const SectionWrap = styled.section`
    padding-top: 96px;
    padding-bottom: 88px;
    @media ${device.medium}{
        padding-top: 76px;
        padding-bottom: 76px;
    }
    @media ${device.small}{
        padding-top: 55px;
        padding-bottom: 56px;
    }
`;

export const ProgressOneWrap = styled.div`
    margin-bottom: 50px;
    @media ${device.small}{
        margin-bottom: 40px;
    }
`;

export const ProgressTwoWrap = styled.div``;