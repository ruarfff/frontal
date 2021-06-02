import styled from "styled-components";
import { jump } from "@assets/css/animations";

export const ProgressCircleWrap = styled.div`
    width: 160px;
    height: 160px;
    position: relative;
    .CircularProgressbar-trail {
        stroke: #d6d6d6;
    }
    
    .CircularProgressbar-path {
        stroke: ${props => props.color || props.theme.colors.themeColor};
    }
    .circle-design {
        position: absolute;
        border-radius: 50%;
        animation: ${jump} infinite 2s;
        animation-direction: alternate;
        &.one {
            width: 43px;
            height: 43px;
            left: 0;
            bottom: 28px;
        }
        &.two{
            width: 17px;
            height: 17px;
            right: -20px;
            top: 50%;
            margin-top: -8px;
            animation-delay: 1s;
        }
    }
    .progress-child{
        width: 84%;
        height: 84%;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #000;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 24px;
        font-weight: 400;
        background-color: transparent;
    }
`;