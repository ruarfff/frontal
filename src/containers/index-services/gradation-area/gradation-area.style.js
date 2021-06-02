import styled from "styled-components";
import { device } from "@theme";

export const SectitonWrap = styled.section`
    padding-top: 100px;
    padding-bottom: 91px;
    @media ${device.medium}{
        padding-top: 80px;
        padding-bottom: 21px;
    }
    @media ${device.small}{
        padding-top: 60px;
        padding-bottom: 0;
    }
`;

export const GradationRow = styled.div`
    display: flex;
    margin-left: -15px;
    margin-right: -15px;
    @media ${device.medium}{
        display: block;
    }
`;

export const SectionTitleWrap = styled.div`
    margin-bottom: 53px;
    @media ${device.small}{
        margin-bottom: 30px;
    }
`;

export const StepWrap = styled.div`
    text-align: right;
    @media ${device.small}{
        text-align: left;
        margin-bottom: 42px;
    }
    h3{
        position: relative;
        font-size: 13px;
        line-height: 2em;
        letter-spacing: 2px;
        text-transform: uppercase;
        display: inline-block;
        padding: 35px 80px 35px 42px;
        z-index: 1;
        mark{
            position: absolute;
            top: 50%;
            right: 0;
            transform: translate(0, -50%);
            font-size: 120px;
            line-height: .8;
            font-weight: 900;
            color: #ededed;
            z-index: -1;
        }
        &:before{
            background-color: ${props => props.theme.colors.themeColor};
            content: '';
            position: absolute;
            top: 47px;
            left: 0;
            width: 34px;
            height: 1px;
        }
    }
`;