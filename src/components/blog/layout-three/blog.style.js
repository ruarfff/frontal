import styled from "styled-components";

export const BlogMedia = styled.div`
    position: relative;
    transition: ${props => props.theme.transition};
`;

export const BlogThumb = styled.figure`
    img{
        width: 100%;
        border-radius: 5px;
        transition: all .3s;
    }
    a{
        z-index: 2;
        position: relative;
        display: block;
        &:before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: .5;
            z-index: 1;
            background-image: -webkit-gradient(linear, left top, left bottom, color-stop(11%, rgba(51, 51, 51, 0)), color-stop(80%, #000));
            background-image: linear-gradient(-180deg, rgba(51, 51, 51, 0) 11%, #000 80%);
            border-radius: 5px;
        }
    }
`;

export const BlogHeaderMeta = styled.div`
    position: absolute;
    bottom: 18px;
    left: 30px;
    right: 30px;
    color: #fff;
    font-size: 14px;
    margin: 0 -8px;
    z-index: 2;
    display: flex;
    align-items: center;
`;

export const BlogInfo = styled.div`
    margin-top: 20px;
`;

export const BlogTitle = styled.h4`
    a{
        color: inherit;
        font-size: inherit;
    }
`;

export const BlogExcerpt = styled.div`
    margin-top: 15px;
`;

export const ReadMoreBtn = styled.div`
    margin-top: 15px;
`;

export const BlogWrapper = styled.div`
    
`;