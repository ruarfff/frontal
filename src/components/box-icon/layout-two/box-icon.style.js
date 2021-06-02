import styled from "styled-components";
import { device } from "@theme";

export const BoxIconInner = styled.div`
    padding: 30px 15px;
    border-radius: 5px;
    transition: ${props => props.theme.transition};
    text-align: center;
    display: flex;
    @media ${device.small}{
        padding: 25px 15px 15px;
    }
`;

export const BoxIconImg = styled.div`
    max-width: 80px;
    flex-basis: 80px;
    margin-right: 10px;
    color: #333333;
`;

export const BoxIconContent = styled.div`
    text-align: left;
    max-width: calc(100% - 90px);
    flex-basis: calc(100% - 90px);
`;

export const BoxIcontitle = styled.h5`
    font-weight: 500;
    line-height: 1.25;
    margin-bottom: 12px;
`;

export const BoxIconText = styled.p`
    margin-bottom: 0;
`;

export const BoxIconBtn = styled.div`
    margin-top: 20px;
`;

export const BoxIconWrap = styled.div`
    &:hover{
        ${BoxIconInner}{
            border-color: #fff;
            transform: translateY(-5px);
            background: #fff;
            box-shadow: 0 0 40px rgba(51,51,51,0.1);
        }
    }
`;