import styled from "styled-components";

export const RatingsWrap = styled.div`
    color: #fb0;
    font-size: 24px;
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    i{
        &:not(:first-child){
            margin-left: 11px;
        }
    }
`;