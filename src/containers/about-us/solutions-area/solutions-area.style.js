import styled from "styled-components";
import { device } from "@theme";

export const SolutionsWrapper = styled.section`
    padding-top: 90px;
    padding-bottom: 96px;
    @media ${device.medium}{
        padding-top: 73px;
        padding-bottom: 76px;
    }
    @media ${device.small}{
        padding-top: 53px;
        padding-bottom: 56px;
    }
`;

export const SolutionBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const SolutionBoxItem = styled.div`
    max-width: 50%;
    flex-basis: 50%;
    padding-right: 20px;
    margin-top: 40px;
    @media ${device.medium}{
        max-width: 100%;
        flex-basis: 100%;
        padding-right: 0;
    }
`;