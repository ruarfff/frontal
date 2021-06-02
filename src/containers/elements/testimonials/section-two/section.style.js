import styled from "styled-components";
import { device } from "@theme";

export const SectionWrap = styled.div`
    padding-top: 120px;
    padding-bottom: 120px;
    background: #f6f2ed;
    @media ${device.medium}{
        padding-top: 80px;
        padding-bottom: 80px;
    }
    @media ${device.small}{
        padding-top: 60px;
        padding-bottom: 60px;
    }
    .cp-80{
        padding-left: 80px;
        padding-right: 80px;
        @media ${device.large}{
            padding-left: 40px;
            padding-right: 40px;
        }
        @media ${device.small}{
            padding-left: 30px;
            padding-right: 30px;
        }
        @media ${device.xsmall}{
            padding-left: 15px;
            padding-right: 15px;
        }
    }
`;
