import styled from "styled-components";

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
    &:hover{
        .video-play{
            transform: scale3d(1.15,1.15,1.15);
        }
    }
`;