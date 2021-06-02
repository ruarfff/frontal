import styled from "styled-components";
import { device } from "@theme";

export const SectionWrap = styled.section`
    padding-bottom: 80px;
    @media ${device.medium}{
        padding-bottom: 50px;
    }
    @media ${device.medium}{
        padding-bottom: 30px;
    }
`;