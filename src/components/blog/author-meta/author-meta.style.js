import styled from "styled-components";

export const AuthorMetaWrap = styled.div`
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    margin-left: ${props => props.ml};
    margin-right: ${props => props.mr};
    a{
        display: flex;
        align-items: center;
        .gatsby-image-wrapper{
            border-radius: 50%;
            width: 40px;
            height: 40px;
        }
        span {
            margin-left: 8px;
            color: ${props => props.color};
        }
    }
`;