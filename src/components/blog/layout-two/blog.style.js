import styled from "styled-components";
import QuoteImg from '../../../assets/images/icons/quote.png'
import { device } from "@theme";

export const BlogWrapper = styled.article`

`;

export const BlogMedia = styled.div`
    margin-bottom: 22px;
`;

export const BlogThumb = styled.figure`
    margin: 0;
    .gatsby-image-wrapper{
        border-radius: 5px;
    }
    a{
        display: block;
    }
`;

export const BlogQuote = styled.blockquote`
    position: relative;
    padding: 78px 40px 53px;
    background: #f5f7fd;
    text-align: center;
    @media ${device.small}{
        padding: 60px 20px 36px;
    }
    &:before{
        content: '';
        position: absolute;
        left: 50%;
        top: 54px;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
        height: 132px;
        width: 150px;
        background: url(${QuoteImg}) no-repeat;
    }
    h3{
        font-size: 24px;
        line-height: 1.5;
        margin-bottom: 39px;
    }
    footer{
        font-size: 18px;
        color: #333;
        margin-bottom: 0;
    }
`;

export const BlogInfo = styled.div`

`;

export const BlogHeader = styled.header`

`;

export const BlogTitle = styled.h3`
    font-size: 40px;
    margin-bottom: 10px;
    @media ${device.large}{
        font-size: 35px;
    }
    @media ${device.small}{
        font-size: 30px;
    }
    @media ${device.xsmall}{
        font-size: 25px;
    }
    a{
        color: ${props => props.theme.colors.headingColor};
    }
`;

export const BlogHeaderMeta = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 25px;
`;

export const BlogExcerpt = styled.div`
    margin-bottom: 35px;
`;

export const BlogFooter = styled.footer`
    display: flex;
    flex-wrap: wrap;
`;

export const BlogFooterLeft = styled.div`
    flex-basis: 50%;
    max-width: 50%;
    @media ${device.xsmall}{
        flex-basis: 100%;
        max-width: 100%;
    }
`;

export const BlogFooterRight = styled.div`
    flex-basis: 49%;
    max-width: 49%;
    @media ${device.xsmall}{
        flex-basis: 100%;
        max-width: 100%;
    }

    .share-label{
        font-weight: 500;
    }
`;

