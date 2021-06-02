import styled from "styled-components";
import { device } from "@theme";

export const SectionWrap = styled.div`
    padding-top: 86px;
    padding-bottom: 96px;
    background: #f8f8f8;
    @media ${device.medium}{
        padding-top: 70px;
        padding-bottom: 76px;
    }
    @media ${device.small}{
        padding-top: 50px;
        padding-bottom: 56px;
    }
`;