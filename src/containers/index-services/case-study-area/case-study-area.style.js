import styled from "styled-components";
import { device } from "@theme";

export const SectionWrap = styled.section`
    padding-top: 100px;
    margin-bottom: 20px;
    @media ${device.medium}{
        padding-top: 80px;
        margin-bottom: 60px;
    }
    @media ${device.small}{
        padding-top: 60px;
        margin-bottom: 60px;
    }
`;

export const CaseInfo = styled.div`
    margin-top: 30px;
    @media ${device.medium}{
        margin-top: 0;
    }
`;

export const CaseTitle = styled.h4`
    margin-bottom: 10px;
    font-weight: 500;
`;

export const CaseCat = styled.p`
    color: ${props => props.theme.colors.themeColor};
`;

export const CaseText = styled.p`
    font-size: 18px;
    line-height: 1.67;
`;

export const CaseImage = styled.figure``;