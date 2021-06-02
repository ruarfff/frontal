import styled from "styled-components";
import { device } from "@theme";

export const SectionWrap = styled.section`
    padding-bottom: 70px;
    background: -webkit-linear-gradient(top, #FFF 0, #F5F5F5 100%);
    @media ${device.medium}{
        padding-bottom: 50px;
    }
    @media ${device.small}{
        padding-bottom: 30px;
    }
`;