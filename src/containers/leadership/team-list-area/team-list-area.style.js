import styled from "styled-components";
import { device } from "@theme";

export const TeamListWrapper = styled.div`
    padding-bottom: 95px;
    @media ${device.medium}{
        padding-bottom: 75px;
    }
    @media ${device.small}{
        padding-bottom: 52px;
    }
`;