import styled from "styled-components";
import { device } from "@theme";

export const SectionWrap = styled.section`
    padding-top: 53px;
    padding-bottom: 66px;
    @media ${device.medium}{
        padding-top: 54px;
        padding-bottom: 52px;
    }
    @media ${device.small}{
        padding-top: 39px;
        padding-bottom: 36px;
    }
`;