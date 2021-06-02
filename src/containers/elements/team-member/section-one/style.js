import styled from "styled-components";
import { device } from "@theme";

export const TeamWrapper = styled.section`
    padding-top: 100px;
    padding-bottom: 35px;
    @media ${device.medium}{
        padding-top: 70px;
        padding-bottom: 15px;
    }
    @media ${device.small}{
        padding-top: 56px;
        padding-bottom: 25px;
    }
`;

export const SectionTitle = styled.div`
    margin-bottom: 60px;
    @media ${device.medium}{
        margin-bottom: 50px;
    }
`;

export const ButtonWrap = styled.div`
    margin-top: 30px;
`;