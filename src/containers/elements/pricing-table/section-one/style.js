import styled from "styled-components";
import { device } from "@theme";

export const SectionWrap = styled.section`
    padding-top: 100px;
    padding-bottom: 70px;
    background: #F8F8F8;
    @media ${device.medium}{
        padding-top: 80px;
        padding-bottom: 50px;
    }
    @media ${device.small}{
        padding-top: 60px;
        padding-bottom: 30px;
    }
`;