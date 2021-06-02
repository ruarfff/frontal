import styled, { css } from "styled-components";
import Heading from "@ui/heading";
import QuoteImg from '../../../assets/images/icons/quote.png'
import { device } from "@theme";

export const BlogMedia = styled.div`
    a{
        display: block;
    }
    margin-bottom: 20px;
    transition: ${props => props.theme.transition};
`;

export const BlogThumb = styled.figure`
    img{
        width: 100%;
        border-radius: 5px;
        transition: all .3s;
    }
`;
export const BlogQuote = styled.blockquote`
    position: relative;
    padding: 45px 30px 40px;
    background: #f5f7fd;
    text-align: center;
    &:before{
        content: '';
        position: absolute;
        left: 50%;
        top: 30px;
        transform: translateX(-50%);
        height: 90px;
        width: 120px;
        background: url(${QuoteImg}) no-repeat;
        background-size: cover;
    }
    h3{
        font-size: 20px;
        line-height: 1.5;
        margin-bottom: 30px;
    }
    footer{
        font-size: 16px;
        color: #333;
        margin-bottom: 0;
    }
`;
export const BlogInfo = styled.div``;

export const BlogHeader = styled.header``;

export const BlogTitle = styled(Heading)`
    font-size: 24px;
    line-height: 1.5;
    margin-bottom: 0;
    a{
        color: inherit;
        font-size: inherit;
    }
`;

export const BlogExcerpt = styled.div`
    margin-top: 10px;
`;

export const ReadMoreBtn = styled.div`
    margin-top: 13px;
`;

export const BlogWrapper = styled.div`
    margin-bottom: ${props => props.mb};
    ${props => props.responsive && css`
        ${props => props.responsive.small && css`
            @media ${device.small}{
                margin-bottom: ${props => props.responsive.small.mb};
            } 
        `}
    `} 
    &:hover{
        ${BlogMedia}{
            transform: translateY(-5px);
        }
    }
`;