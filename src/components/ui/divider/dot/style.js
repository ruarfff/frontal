import styled, { css } from "styled-components";
import { separatorBounce } from "@assets/css/animations";

export const DotsWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: ${props => props.mt};
`;

export const Dot = styled.div`
    border-radius: 50%;
    box-shadow: 0 0 12px #def0ff;
    background: #000;
    background-color: ${props => props.theme.colors.themeColor};
    animation: ${separatorBounce} 1.4s ease-in-out 0s infinite both;
    width: 14px;
    height: 14px;
    ${props => props.serial === 'second' && css`
        margin-top: 18px;
        animation-delay: -.16s;
    `}
    ${props => props.serial === 'third' && css`
        margin-top: 14px;
        animation-delay: -.32s;
    `}
`;