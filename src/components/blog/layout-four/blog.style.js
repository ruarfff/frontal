import styled from "styled-components";
import { device } from "@theme";

export const BlogWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const BlogMedia = styled.div`
    position: relative;
    transition: ${props => props.theme.transition};
    flex-basis: 200px;
    max-width: 200px;
    @media ${device.xsmall}{
        flex-basis: 100%;
        max-width: 100%;
    }
`;

export const BlogThumb = styled.figure`
    margin: 0;
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

export const BlogThumbMeta = styled.div`
    position: absolute;
    bottom: 18px;
    left: 30px;
    right: 30px;
    color: #fff;
    font-size: 14px;
    margin: 0 -8px;
    z-index: 2;
`;

export const BlogInfo = styled.div`
    flex-basis: calc(100% - 200px);
    max-width: calc(100% - 200px);
    padding-left: 29px;
    @media ${device.xsmall}{
        flex-basis: 100%;
        max-width: 100%;
        padding-left: 0;
    }
`;

export const BlogHeaderMeta = styled.div`
    margin-bottom: 10px;
`;

export const BlogTitle = styled.h5`
    font-size: 22px;
    a{
        color: inherit;
        font-size: inherit;
    }
`;
