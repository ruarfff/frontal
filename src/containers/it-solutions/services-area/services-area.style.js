import styled from "styled-components";
import { device } from "@theme";

export const SectionWrap = styled.section`
    padding-top: 100px;
    padding-bottom: 100px;
    @media ${device.medium}{
        padding-top: 80px;
        padding-bottom: 80px;
    }
    @media ${device.small}{
        padding-top: 60px;
        padding-bottom: 60px;
    }
    .box-item{
        margin-top: 60px;
        @media ${device.small}{
            margin-top:47px;
        }
    }
`;

export const SectionBottom = styled.div`
    margin-top: 60px;
    text-align: center;
    @media ${device.small}{
        margin-top: 45px;
    }
`;