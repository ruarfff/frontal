import styled from "styled-components";
import { device } from "@theme";

export const SectionWrap = styled.div`
    padding: 100px 0;
    @media ${device.medium}{
        padding: 80px 0;
    }
    @media ${device.small}{
        padding: 60px 0;
    }
`;