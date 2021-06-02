import styled from "styled-components";
import { device } from "@theme";

export const BlogWrap = styled.section`
    padding-top: 100px;
    padding-bottom: 100px;
    @media ${device.medium}{
        padding-top: 80px;
        padding-bottom: 80px;
    }
    @media ${device.medium}{
        padding-top: 60px;
        padding-bottom: 60px;
    }
`;

export const BlogListItem = styled.div`
    padding: 20px 0;
`;

export const BlogList = styled.div`
    padding-left: 30px;
    border-left: 1px solid ${props => props.theme.colors.borderColor};
    @media ${device.medium}{
        margin-top: 40px;
    }
    ${BlogListItem}{
        &:nth-child(2){
            border-top: 1px solid ${props => props.theme.colors.borderColor};
            border-bottom: 1px solid ${props => props.theme.colors.borderColor};
        }
    }
`;

