import styled from "styled-components";

export const LineWrap = styled.hr`
    border-color: #ededed;
    border-top-width: ${props => props.borderWidth};
    border-top-style: ${props => props.borderStyle};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
`;