import styled from "styled-components";
import { device } from "@theme";

export const SectionWrap = styled.section``;

export const GridWrap = styled.div`
    border-right: 1px solid ${props => props.theme.colors.borderColor};
    display: flex;
    flex-wrap: wrap;
`;

export const Grid = styled.div`
    max-width: 25%;
    flex-basis: 25%;
    padding-top: 100px;
    padding-bottom: 100px;
    padding-left: 25px;
    padding-right: 25px;
    position: relative;
    @media ${device.large}{
        padding-left: 10px;
        padding-right: 10px;
    }
    @media ${device.medium}{
        padding-top: 60px;
        padding-bottom: 60px;
        max-width: 50%;
        flex-basis: 50%;    
    }
    @media ${device.small}{
        max-width: 100%;
        flex-basis: 100%;    
    }
    &:before,
    &:after{
        position: absolute;
        content: '';
        left: 0;
        background: ${props => props.theme.colors.borderColor};
    }
    &:before{
        top: 0;
        bottom: 0;
        width: 1px;
    }
    &:after{
        top: -1px;
        right: 0;
        height: 1px
    }
`;