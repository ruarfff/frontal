import styled from "styled-components";
import { device } from "@theme";

export const SectionWrap = styled.div`
    padding-top: 100px;
    padding-bottom: 66px;
    @media ${device.medium}{
        padding-top: 80px;
        padding-bottom: 49px;
    }
    @media ${device.small}{
        padding-top: 60px;
        padding-bottom: 30px;
    }
    .box-item{
        margin-top: 10px;
    }
`;
