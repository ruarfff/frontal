import styled from "styled-components";
import { device } from "@theme";

export const SectionWrap = styled.section`
    padding-top: 89px;
    padding-bottom: 45px;
    @media ${device.medium}{
        padding-top: 72px;
        padding-bottom: 25px;
    }
    @media ${device.small}{
        padding-top: 53px;
        padding-bottom: 19px;
    }
`;

export const SectionTitle = styled.div`
    text-align: center;
    margin-bottom: 30px;
`;

export const LeftBox = styled.div`
    margin-top: 15px;
    @media ${device.medium}{
        margin-bottom: 35px;
    }
`;

export const RightBox = styled.div``;