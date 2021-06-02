import styled, { css } from "styled-components";
import { device } from "@theme";

export const SingleBlogWrap = styled.div`
    .post-content{
        margin-top: 15px;
        blockquote{
            margin: 54px 65px 44px 70px;
            padding: 0 0 0 20px;
            font-size: 18px;
            line-height: 1.78;
            font-weight: 600;
            border-left: 4px solid #eee;
            border-left-color: #d2a98e;
            position: relative;
            color: #333;
            @media ${device.small}{
                font-size: 16px;
                margin: 50px 70px 44px;
            }
            @media ${device.xsmall}{
                margin: 40px 30px;
            }
        }
    }
`;

export const BlogMedia = styled.div`
    margin-bottom: 46px;
`;

export const Thumbnail = styled.div`
    img {
        border-radius: 5px;
    }
`;

export const Blockquote = styled.blockquote`
    position: relative;
    text-align: center;
    padding: 48px 40px;
    background: ${props => props.theme.colors.themeColor};
    @media ${device.small}{
        padding: 38px 30px;
    }
    .quote-icon{
        color: #fff;
        font-size: 26px;
        margin-bottom: 35px;
    }
    h3 {
        margin-bottom: 26px;
        color: #fff;
        font-size: 24px;
        line-height: 1.375;
        @media ${device.small}{
            font-size: 20px;
        }
    }
    footer{
        font-size: 18px;
        color: #fff;
        font-weight: 700;
        @media ${device.small}{
            font-size: 16px;
        }
    }
`;

export const VideoThumbWrapper = styled.div`
    position: relative;
    cursor: pointer;
    .video-poster{
        position: relative;
        img{
            width: 100%;
            border-radius: 5px;
        }
    }
    .video-overlay{
        background-color: rgba(8,106,216,0.8);
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
    .video-button{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .video-play{
        width: 70px;
        height: 70px;
        background: 0 0;
        border: 6px solid #fff;
        color: #fff;
        position: relative;
        transition: all 1s cubic-bezier(0,0,.2,1) !important;
        border-radius: 50%;
    }
    .video-play-icon{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        line-height: 1;
        margin-left: 1px;
        z-index: 2;
        &:before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 0;
            transform: translate(-50%,-50%);
            border-top: 11px solid transparent;
            border-bottom: 11px solid transparent;
            border-left: 17px solid currentColor;
            border-top-width: 13px;
            border-bottom-width: 13px;
            border-left-width: 20px;
        }
    }
`;

export const CategoryBox = styled.div`
    text-align: center;
    margin-bottom: 10px;
`;
export const BlogInfo = styled.header`

`;

export const HeaderMetaWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export const FooterMetaWrap = styled.div`
    margin-top: 16px;
    margin-bottom: 50px;
    padding-bottom: 20px;
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
`;

export const SocialShareWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const SocialMediaWrap = styled.div`
    position: relative;
    margin-left: 10px;
`;

export const FloatingSocialBox = styled.div`
    position: absolute;
    bottom: 100%;
    right: 0%;
    transform: translate(0%, -1px);
    width: auto;
    white-space: nowrap;
    padding: 0 4px;
    text-align: center;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 20px rgba(0,0,0,0.06);
    user-select: none;
    filter: drop-shadow(0 2px 20px rgba(0,0,0,0.06));
    z-index: 999;
    padding: 10px 15px;
    visibility: hidden;
    opacity: 0;
    transition: ${props => props.theme.transition};
    ${props => props.isOpen && css`
        transform: translate(0%, -12px);
        visibility: visible;
        opacity: 1;
    `}
    @media ${device.small}{
        right: 10%;
    }
    &:before{
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(100%);
        content: '';
        border-top: 8px solid #fff;
        border-left: 9px solid transparent;
        border-right: 9px solid transparent;
    }
`;

export const AuthorWrap = styled.div``;

export const AuthorInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const AuthorAvatar = styled.div`
    max-width: 170px;
    flex-basis: 170px;
    text-align: center;
    .gatsby-image-wrapper{
        margin-bottom: 22px !important;
        border-radius: 50%;
        @media ${device.xsmall}{
            margin-left: 0 !important;
        }
    }
`;

export const AuthorDesc = styled.div`
    max-width: calc(100% - 170px);
    flex-basis: calc(100% - 170px);
    @media ${device.xsmall}{
        max-width: 100%;
        flex-basis: 100%; 
        margin-top: 10px;
    }
`;

export const BlogNavigation = styled.div`
    margin-top: 36px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;
    @media ${device.small}{
        margin-top: 16px;
    }
    .post-nav {
        flex-basis: 50%;
        max-width: 50%;
        padding-left: 15px;
        padding-right: 15px;
        @media ${device.small}{
            flex-basis: 100%;
            max-width: 100%;
            margin-top: 20px;
        }
    }
`;