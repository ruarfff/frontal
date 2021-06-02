import styled from "styled-components";

export const TagWrapper = styled.div`
    display: flex;
    align-items: center;
    a{
        color: #ababab;
        font-size: 13px;
        padding-right: 3px;
    }
    .icon{
        font-size: 18px;
        padding-right: 9px;
        color: ${props => props.theme.colors.textColor};
    }
`;