import styled from "styled-components";
import { device } from "@theme";

export const SectionWrap = styled.section`
    padding-top: 91px;
    padding-bottom: 72px;
    @media ${device.medium}{
        padding-top: 62px;
        padding-bottom: 43px;
    }
    @media ${device.medium}{
        padding-top: 44px;
        padding-bottom: 25px;
    }
`;