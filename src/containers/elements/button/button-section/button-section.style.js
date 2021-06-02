import styled from "styled-components";
import { device } from "@theme";

export const SectionWrapper = styled.section`
    padding-top: 120px;
    padding-bottom: 17px;
    @media ${device.medium}{
        padding-top: 80px;
        padding-bottom: 6px;
    }
    @media ${device.small}{
        padding-top: 60px;
        padding-bottom: 6px;
    }
`;

export const SectionOne = styled.div`
    margin-bottom: 100px;
    @media ${device.medium}{
        margin-bottom: 70px;
    }
    @media ${device.small}{
        margin-bottom: 50px;
    }
`;

export const ButtonGroupWrap = styled.div` 
    margin-left: -10px;
    margin-right: -10px;
`;

export const ButtonWrap = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;