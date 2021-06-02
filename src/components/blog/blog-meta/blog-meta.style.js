import styled from "styled-components";

export const BlogMetaWrap = styled.div`
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    margin-left: ${props => props.ml};
    margin-right: ${props => props.mr};
    a{
        display: flex;
        align-items: center;
    }
    svg, i{
        margin-right: 6px;
        color: ${props => props.color || props.theme.colors.textColor};
    }
    span{
        color: ${props => props.color};
    }
`;