import styled from "styled-components";
import { device } from "@theme";

export const SectionWrap = styled.div`
    padding-top: 120px;
    padding-bottom: 120px;
    @media ${device.medium}{
        padding-top: 80px;
        padding-bottom: 80px;
    }
    @media ${device.small}{
        padding-top: 60px;
        padding-bottom: 60px;
    }
`;

export const HeaderWrap = styled.div`
    margin-right: 3rem;
    @media ${device.medium}{
        margin-bottom: 20px;
    }
`;