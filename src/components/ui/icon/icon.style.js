import styled, { css } from "styled-components";

export const IconWrap = styled.i`
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontweight};
    line-height: ${props => props.lineHeight};
    margin-top: ${props => props.mt};
    padding-right: ${props => props.pr};
    ${props => props.color === 'primary' && css`
        color: ${props => props.theme.colors.themeColor};
    `}
    ${props => props.color === 'secondary' && css`
        color: ${props => props.theme.colors.secondary};
    `}
    ${props => (props.color !== 'primary' & props.color !== 'secondary') && css`
        color: ${props => props.color || props.theme.colors.themeColor};
    `}
`;