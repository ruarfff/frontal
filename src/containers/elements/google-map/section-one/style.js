import styled from "styled-components";
import { device } from "@theme";

export const SectionWrap = styled.section`
    padding-top: 90px;
    padding-bottom: 90px;
    @media ${device.medium}{
        padding-top: 72px;
        padding-bottom: 72px;
    }
    @media ${device.small}{
        padding-top: 53px;
        padding-bottom: 53px;
    }
    .map-one{
        @media ${device.medium}{
            margin-bottom: 50px;
        }
    }
`;