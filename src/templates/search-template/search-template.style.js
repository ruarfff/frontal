import styled from "styled-components";
import { device } from "@theme";


export const BlogListWrapper = styled.section`
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

export const SearchInfoHeader = styled.div`
    margin-bottom: 70px;
    text-align: center;
    @media ${device.medium}{
        margin-bottom: 50px;
    }
`;

export const SearchError = styled.div`
    text-align: center;
    h2{
        font-size: 60px;
        @media ${device.medium}{
            font-size: 50px;
        }
    }
`;