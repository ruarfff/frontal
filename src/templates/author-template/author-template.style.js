import styled from "styled-components";
import { device } from "@theme";

export const AuthorWrapper = styled.section`
    padding-top: 89px;
    padding-bottom: 100px;
    @media ${device.medium}{
        padding-top: 72px;
        padding-bottom: 80px;
    }
    @media ${device.small}{
        padding-top: 53px;
        padding-bottom: 60px;
    }
`;

export const BlogBoxWrapper = styled.div``;

export const BlogBox = styled.div`
    padding-bottom: 50px;
    margin-bottom: 50px;
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
`;