import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import { animateUpDown } from "@assets/css/animations";
import { device } from "@theme";

export const HeroWrapper = styled(BackgroundImage)`
    padding-top: 120px;
    padding-bottom: 120px;
    position: relative;
    height: 1020px;
    display: flex;
    align-items: center;
    overflow: hidden;
    background-position: 50% 50% !important;
    background-color: transparent;
    @media ${device.xlarge}{
        height: 780px;
    }
    @media ${device.large}{
        height: 620px;
    }
    @media ${device.medium}{
        height: auto;
        padding-top: 115px;
        padding-bottom: 80px;
    }
    .pr-img {
        &-01{
            position: absolute !important;
            top: -4%;
            left: 28%;
            width: 337px;
            @media ${device.small}{
                width: 130px;
                top: -10%;
                left: 8%;
            }
        }
        &-02{
            position: absolute !important;
            top: 12%;
            right: 6%;
            width: 119px;
            @media ${device.small}{
                right: -5%;
            }
        }
        &-03{
            position: absolute !important;
            bottom: 10%;
            right: -10%;
            width: 435px;
            @media ${device.xlarge}{
                width: 250px;
            }
            @media ${device.medium}{
                width: 200px;
                right: -20%;
            }
        }
        &-04{
            position: absolute !important;
            bottom: 20%;
            right: 18%;
            width: 356px;
            @media ${device.medium}{
                bottom: 5%;
                right: 18%;
            }
            @media ${device.small}{
                bottom: 2%;
                right: 50%;
            }
        }
    }
    .animation_images{
        animation-timing-function: cubic-bezier(0.54, 0.085, 0.5, 0.92);
        animation-name: ${animateUpDown};
        animation-iteration-count: infinite;
        &.one{
            animation-duration: 3.2s;
        }
        &.two{
            animation-duration: 3.8s;
        }
    }
`;

export const HeroWrapperText = styled.div`
    z-index: 4;
    position: relative;
    @media ${device.medium}{
        text-align: center;
    }
`;

export const PreviewInnerImg = styled.div`
    @media ${device.medium}{
        max-width: 500px;
        margin: auto;
    }
`;