import styled from "styled-components";
import { device } from "@theme";

export const SectionWrap = styled.section`
    padding-bottom: 100px;
    @media ${device.medium}{
        padding-bottom: 80px;
    }
    @media ${device.small}{
        padding-bottom: 60px;
    }
`;

export const SectionTitle = styled.div`
    text-align: center;
    margin-bottom: 50px;
`;

export const GalleryWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    &:nth-child(4n+1) {
        grid-column: span 8;
    }
`;

export const GalleryGrid = styled.div`
    display: block;
    width: 100%;
    height: 100%;
    &:nth-child(4n+1) {
        grid-column: span 8;
        @media ${device.medium}{
            grid-column: span 6;
        }
        @media ${device.xsmall}{
            grid-column: span 12;
        }
    }
    &:nth-child(4n+2) {
        grid-column: span 4;
        @media ${device.medium}{
            grid-column: span 6;
        }
        @media ${device.xsmall}{
            grid-column: span 12;
        }
    }
    &:nth-child(4n+3) {
        grid-column: span 6;
        @media ${device.xsmall}{
            grid-column: span 12;
        }
    }
    &:nth-child(4n+4) {
        grid-column: span 6;
        @media ${device.xsmall}{
            grid-column: span 12;
        }
    }
`;

export const GalleryOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    background-color: ${props => props.theme.colors.themeColor};
    border-radius: 5px;
    transition: ${props => props.theme.transition};
`;

export const GalleryOverlayIcon = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
    width: 24px;
    height: 24px;
    opacity: 0;
    visibility: hidden;
    transition: ${props => props.transition};
    cursor: pointer;
    .icon{
        color: #fff;
        width: 100%;
        height: 100%;
    }
`;

export const GalleryItem = styled.div`
    position: relative;
    display: flex;
    align-items: stretch;
    background-position: center;
    background-size: cover;
    height: 100%;
    width: 100%;
    max-height: 420px;
    .gatsby-image-wrapper{
        width: 100%;
    }
    img{
        border-radius: 5px;
    }
    &:hover{
        ${GalleryOverlay},
        ${GalleryOverlayIcon}{
            opacity: .9;
            visibility: visible;
        }
    }
`;