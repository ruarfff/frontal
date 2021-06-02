import styled from "styled-components";
import { animateUpDown } from '@assets/css/animations'
import { device } from "@theme";

export const AboutAreaWrap = styled.section`
    padding-top: 100px;
    padding-bottom: 100px;
    position: relative;
    @media ${device.medium}{
        padding-top: 80px;
        padding-bottom: 80px;
    }
    @media ${device.small}{
        padding-top: 60px;
        padding-bottom: 60px;
    }
`;

export const AboutTextBox = styled.div`
    max-width: 570px;
    float: right;
    width: 100%;
    @media ${device.medium}{
        margin: 0 auto 30px;
        float: none;
    }
`;

export const ImageBox1 = styled.div`
    position: relative;
    .gatsby-image-wrapper{
		z-index: 33;
		position: absolute;
        left: 6%;
        top: -70px;
        @media ${device.xlarge}{
            left: 6%;
            top: -50px;
            width: 200px !important;
        }
        @media ${device.large}{
            left: 0%;
        }
        @media ${device.medium}{
            left: 6%;
            top: -70px;
            width: 310px !important;
        }
        @media ${device.small}{
            left: 10%;
            top: -30px;
            width: 184px !important;
        }
        @media ${device.xsmall}{
            left: 0%;
            top: -30px;
            width: 140px !important;
        }
    }
`;
export const ImageBox2 = styled.div`
    position: relative;
    .gatsby-image-wrapper{
		position: absolute;
		z-index: 33;
        left: 50%;
        top: -103px;
        @media ${device.small}{
            top: -65px;
            width: 130px !important;
        }
    }
`;
export const ImageBox3 = styled.div`
    position: relative;
    .gatsby-image-wrapper{
		position: absolute;
		z-index: 33;
        left: 10%;
        bottom: 0px;
        @media ${device.small}{
            bottom: 0;
            width: 120px !important;
            top: inherit;
        }
        @media ${device.small}{
            left: 5%;
            width: 110px !important;
        }
    }
`;
export const ImageBox4 = styled.div`
    .gatsby-image-wrapper{
		position: absolute;
		z-index: 33;
        right: 50px;
        left: auto;
        top: 100%;
        @media ${device.large}{
            right: 35px;
            width: 150px !important;
        }
        @media ${device.small}{
            right: 15px;
            top: 80%;
            width: 140px !important;
        }
        @media ${device.xsmall}{
            right: 15px;
            top: 80%;
            width: 120px !important;
        }
    }
`;
export const MainImageBox = styled.div`
    position: relative;
    z-index: 8;
    text-align: center;
    max-width: 570px;
    max-height: 350px;
    margin: auto;
    margin-top: 120px;
    margin-bottom: 180px;
    @media ${device.large}{
        max-width: 400px;
        margin-bottom: 100px;
    }
    @media ${device.medium}{
        max-width: 570px;
        margin-bottom: 180px;
    }
    @media ${device.small}{
        max-width: 400px;
        margin-bottom: 100px;
    }
`;

export const VideoBtnWrap = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

export const AboutImageBox = styled.div`
    position: relative;
    .animation_image{
        .gatsby-image-wrapper{
            animation-timing-function: cubic-bezier(0.54, 0.085, 0.5, 0.92);
            animation-name: ${animateUpDown};
            animation-iteration-count: infinite;
        }
        &.one{
            .gatsby-image-wrapper{
                animation-duration: 3.2s;
            }
        }
        &.two{
            .gatsby-image-wrapper{
                animation-duration: 3.8s;
            }
        }
        &.three{
            .gatsby-image-wrapper{
                animation-duration: 3.4s;
            }
        }
        &.four{
            .gatsby-image-wrapper{
                animation-duration: 3.4s;
            }
        }
    }
    img{
        border-radius: 5px;
    }
`;