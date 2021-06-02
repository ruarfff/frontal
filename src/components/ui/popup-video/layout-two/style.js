import styled from "styled-components";

export const PopupVideoWrap = styled.div`
    position: relative;
    .gatsby-image-wrapper{
        max-width: 100% !important;
    }
    img{
        border-radius: 5px;
        width: 100% !important;
    }
`;

export const VideoBtnWrap = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
`;