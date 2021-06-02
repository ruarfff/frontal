import styled from "styled-components";

export const ClickableWrap = styled.button`
    background: transparent;
    padding: 0;
    border: none;
    svg, i{
        font-size: ${props => props.fontsize};
        color: ${props => props.color};
        &:hover{
            color: ${props => props.theme.colors.themeColor}
        }
    }
`;