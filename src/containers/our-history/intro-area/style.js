import styled from "styled-components";
import { device } from "@theme";

export const SectionWrap = styled.section`
    padding-top: 89px;
    padding-bottom: 96px;
    text-align: center;
    @media ${device.medium}{
        padding-top: 72px;
        padding-bottom: 76px;
    }
    @media ${device.small}{
        padding-top: 54px;
        padding-bottom: 56px;
    }
`;