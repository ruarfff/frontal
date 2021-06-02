import styled, { css } from "styled-components";
import { device } from "@theme";

export const DropdownItemWrap = styled.li`
    position: relative;
    line-height: 1;
    cursor: pointer;
    ${props => props.active && css`
        padding: 0 10px;
        @media ${device.xlarge}{
            padding: 0 5px;
        }
        &:after{
            position: absolute;
            content: '';
            left: 0;
            bottom: -50px;
            width: 100%;
            height: 50px;
        }
    `}
    &:hover{
        & > ul {
            opacity: 1;
            visibility: visible;
            transform: translateY(10px);
        }
    }
`;

