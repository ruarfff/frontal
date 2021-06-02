import styled from "styled-components";
import { device } from "@theme";

export const SectionWrap = styled.div`
    padding-top: 95px;
    padding-bottom: 95px;
    @media ${device.medium}{
        padding-top: 75px;
        padding-bottom: 75px;
    }
`;