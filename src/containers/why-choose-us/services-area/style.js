import styled from "styled-components";
import { device } from "@theme";

export const SectionWrap = styled.section`
    padding-bottom: 100px;
    @media ${device.medium}{
        padding-bottom: 80px;
    }
    @media ${device.small}{
        padding-bottom: 60px;
    }
    .box-item{
        margin-top: 55px;
        @media ${device.small}{
            margin-top: 41px;
        }
    }
`;

export const SectionBottom = styled.div`
    margin-top: 56px;
    text-align: center;
    @media ${device.small} {
        margin-top: 42px;
    }
`;