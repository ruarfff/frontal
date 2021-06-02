import styled from "styled-components";
import { device } from "@theme";

export const SectionWrap = styled.section`
    padding-top: 90px;
    padding-bottom: 100px;
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
    @media ${device.medium}{
        padding-top: 70px;
        padding-bottom: 80px;
    }
    @media ${device.small}{
        padding-top: 50px;
        padding-bottom: 60px;
    }
`;