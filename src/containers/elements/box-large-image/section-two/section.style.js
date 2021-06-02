import styled from "styled-components";
import { device } from "@theme";

export const SectionWrap = styled.div`
    padding-top: 100px;
    padding-bottom: 90px;
    background: #F8F8F8;
    @media ${device.medium}{
        padding-top: 80px;
        padding-bottom: 70px;
    }
    @media ${device.small}{
        padding-top: 60px;
        padding-bottom: 50px;
    }
    .box-item{
        margin-top: 60px;
        @media ${device.medium}{
            margin-top: 48px;
        }
    }
`;
