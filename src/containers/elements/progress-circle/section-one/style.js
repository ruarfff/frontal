import styled, { css } from "styled-components";
import { device } from "@theme";

export const SectionWrap = styled.div`
    padding: 100px 0 95px;
    @media ${device.medium}{
        padding: 80px 0 75px;
    }
    @media ${device.small}{
        padding: 60px 0 55px;
    }
`;

export const FeatureListProgressWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    ${props => props.position === 'left' && css`
        margin-bottom: 50px;
    `}
`;

export const ProgressCircleWrap = styled.div`
    max-width: 170px;
    flex-basis: 170px;
    @media ${device.xsmall}{
        max-width: 100%;
        flex-basis: 100%;
    }
`;

export const FeatureList = styled.div`
    max-width: calc(100% - 170px);
    flex-basis: calc(100% - 170px);
    padding-left: 40px;
    @media ${device.xsmall}{
        max-width: 100%;
        flex-basis: 100%;
        padding-left: 0;
        margin-top: 20px;
    }
    h6{
        margin-bottom: 20px;
    }
    ul {
        li:not(:last-child){
            margin-bottom: 10px;
        }
    }
`;

