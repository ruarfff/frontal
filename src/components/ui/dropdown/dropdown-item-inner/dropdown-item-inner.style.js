import styled, { css } from "styled-components";
import { device } from "@theme";

export const DropmenuItemInner = styled.div`
    font-weight: 500;
    text-transform: uppercase;
    padding: 10px;
    border: 0;
    background: ${props => props.theme.colors.white};
    color: #222;
    line-height: 1;
    &:hover{
        background: #EEEEEE;
    }
    & > span:not(:first-child){
        margin-left: 10px;
    }
    ${props => props.active && css`
        color: ${props => props.theme.colors.headingColor};
        padding: 0 10px;       
        @media ${device.xlarge}{
            padding: 0 5px;
        }
        &:hover{
            background: ${props => props.theme.colors.white};
        }
    `}
    i{
        font-size: 12px;
        margin-left: 6px;
    }
`;