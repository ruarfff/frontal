import styled from "styled-components";
import { device } from "@theme";

export const SectionWrap = styled.section`
    padding-bottom: 100px;
    @media ${device.medium}{
        padding-bottom: 80px;
    }
    @media ${device.small}{
        padding-bottom: 60px;
    }
`;