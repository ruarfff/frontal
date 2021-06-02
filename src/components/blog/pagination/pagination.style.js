import styled, { css } from "styled-components";
import Anchor from "@ui/anchor";

export const PaginationWrap = styled.nav`

`;

export const PaginationList = styled.ul`
    padding: 0;
    margin: 0;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
`;

export const PaginationItem = styled.li`
    display: inline-block;
    list-style-type: none;
`;

export const PaginationLink = styled(Anchor)`
    padding: 0 10px;
    display: block;
    text-align: center;
    line-height: 41px;
    min-width: 41px;
    height: 41px;
    text-transform: uppercase;
    color: #ababab;
    letter-spacing: 2px;
    border-radius: 5px;
    ${props => props.active && css`
        background: #f6f2ed;
        color: ${props => props.theme.colors.themeColor}
    `}
    ${props => props.disabled && css`
        display: none;
    `}
`;