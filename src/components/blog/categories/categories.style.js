import styled from "styled-components";

export const CategroiesWrap = styled.div`
    margin-bottom: ${props => props.mb};
    a{
        font-size: 14px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: ${props => props.theme.colors.secondary};
        text-transform: uppercase;
        &:not(:last-child){
            margin-right: 5px;
        }
    }
`;