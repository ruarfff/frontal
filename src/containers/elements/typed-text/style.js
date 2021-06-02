import styled from "styled-components";
import { device } from "@theme";

export const SectionWrap = styled.div`
    padding-top: 100px;
    padding-bottom: 100px;
    @media ${device.medium}{
        padding-top: 100px;
        padding-bottom: 100px; 
    }
`;

export const TypedTextWrap = styled.h4`
    max-width: 700px;
    font-size: 48px;
    line-height: 1.34;
    margin-bottom: 0;
    word-wrap: break-word;
    font-weight: 700;
    margin-top: -20px;
    text-align: center;
    margin: 0 auto;
    @media ${device.medium}{
        font-size: 40px; 
    }
    @media ${device.small}{
        font-size: 35px; 
    }
    span{
        &:not(.not-typical){
            color: ${props => props.theme.colors.themeColor};
            font-style: italic;
        }
    }
`;