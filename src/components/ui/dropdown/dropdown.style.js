import styled from "styled-components";

export const DropdownWrap = styled.div`
    padding-right: ${props => props.pr};
    padding-left: ${props => props.pl};
    padding-top: ${props => props.pt};
    padding-bottom: ${props => props.pb};
`;

export const DropdownMenu = styled.ul`
    position: relative;
`