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
    &:before{
        position: absolute;
        content: '';
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        border-radius: 5px;
        background-color: rgba(8, 106, 216, 0.8);
    }
`;

export const VideoBtnWrap = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
`; 