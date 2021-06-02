import styled from "styled-components";
import { device } from "@theme";

export const SectionWrap = styled.div`
    background: ${props => props.theme.colors.themeColor};
    padding-top: 93px;
    padding-bottom: 36px;
    @media ${device.medium}{
        padding-top: 75px;
        padding-bottom: 26px;
    }
`;

export const IconsWrap = styled.div`
    margin-bottom: 60px;
    @media ${device.medium}{
        margin-bottom: 50px;
    }
`;