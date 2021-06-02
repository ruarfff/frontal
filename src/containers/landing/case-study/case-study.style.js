import styled from "styled-components";
import { device } from "@theme";

export const CaseStudyWrap = styled.div`
    padding-top: 100px;
    padding-bottom: 60px;
    @media ${device.medium}{
        padding-top: 80px;
    }
    @media ${device.small}{
        padding-top: 60px;
    }
`;

export const ImageWrap = styled.div`
    text-align: right;
`;

export const CaseStudyTextWrap = styled.div`
    max-width: 500px;
    width: 100%;
    margin: auto;
`;

export const ButtonWrap = styled.div`
    margin-top: 34px;
`;