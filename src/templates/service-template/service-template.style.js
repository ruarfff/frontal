import styled from "styled-components";
import { device } from "@theme";
import BackgroundImage from "gatsby-background-image";

export const BannerArea = styled(BackgroundImage)`
    padding-top: 195px;
    padding-bottom: 204px;
`;

export const BannerTextWrap = styled.div`
    text-align: center;
`;

export const IntroArea = styled.section`
    padding-top: 100px;
    padding-bottom: 94px;
    @media ${device.medium}{
        padding-top: 72px;
        padding-bottom: 50px;
    }
`;

export const FaqArea = styled.div`
    padding-bottom: 70px;
`;

export const VideoBoxWrap = styled.div`
    position: relative;
    @media ${device.medium}{
        margin-top: 30px;
    }
    img{
        border-radius: 5px;
    }
`;

export const VideoBtnWrap = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

export const FeatureArea = styled.section`
    padding-bottom: 68px;
    @media ${device.medium}{
        padding-bottom: 55px;
    }
`;