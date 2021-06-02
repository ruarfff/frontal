import styled from "styled-components";
import { device } from "@theme";

export const SectionWrap = styled.div``;
export const FunFactGridWrap = styled.div`
    border-right: 1px solid #ededed;
    display: flex;
    flex-wrap: wrap;
`;

export const FunFactGrid = styled.div`
    width: 25%;
    padding-top: 100px;
    padding-bottom: 100px;
    padding-left: 30px;
    padding-right: 30px;
    position: relative;
    @media ${device.large}{
        padding-left: 10px;
        padding-right: 10px; 
    }
    @media ${device.medium}{
        width: 50%;
        padding-top: 60px;
        padding-bottom: 60px;
        &:after {
            position: absolute;
            content: '';
            top: -1px;
            left: 0;
            right: 0;
            background: #ededed;
            height: 1px;
        }
    }
    @media ${device.small}{
        width: 100%;
    }
    &:before{
        position: absolute;
        content: '';
        left: 0;
        top: 0;
        bottom: 0;
        background: #ededed;
        width: 1px;
    }
`;