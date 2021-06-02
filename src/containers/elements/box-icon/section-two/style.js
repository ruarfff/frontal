import styled from "styled-components";
import { device } from "@theme";

export const SectionWrap = styled.section`
    padding-top: 100px;
    padding-bottom: 63px;
    background: #f8f8f8;
    @media ${device.medium}{
        padding-top: 80px;
        padding-bottom: 42px;
    }
    @media ${device.small}{
        padding-top: 60px;
        padding-bottom: 22px;
    }
`;