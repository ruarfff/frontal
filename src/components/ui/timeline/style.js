import styled, { css } from "styled-components";
import { device } from "@theme";

export const TimelineWrap = styled.div``;

export const TimelineList = styled.div`
    position: relative;
    width: 100%;
    padding: 32px 0 65px;
`;

export const Line = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -1px;
    height: 100%;
    border-left: 2px solid #086ad8;
    opacity: .15;
    @media ${device.small}{
        left: 15px;
    }
`;

export const Dots = styled.div`
    position: absolute;
    top: 14px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 30px;
    height: 30px;
    color: #086ad8;
    @media ${device.small}{
        right: auto;
        left: 0;
        transform: none;
    }
    &:before{
        content: '';
        position: absolute;
        border: 1px solid currentColor;
        border-radius: 50%;
        top: 0;
        left: 0;
        opacity: .3;
        width: 30px;
        height: 30px;
    }
    &:after{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 14px;
        height: 14px;
        border-radius: 50%;
        z-index: 2;
        border: 3px solid currentColor;
        background: #fff;
    }
`;

export const TimelineRow = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const TimelineFeature = styled.div`
    padding-left: 30px;
    padding-right: 30px;
    flex: 0 0 50%;
    max-width: 50%;
    @media ${device.small}{
        flex: 0 0 100%;
        max-width: 100%;
    }
    @media ${device.xsmall}{
        padding-left: 15px;
        padding-right: 15px;
    }
`;

export const TimelineFeatureInner = styled.div`
    width: 500px;
    max-width: 100%;
`;

export const DateWrap = styled.h2`
    color: #086AD8;
    font-size: 72px;
    font-weight: 400;
    line-height: 1;
    margin-bottom: 27px;
    @media ${device.small}{
        font-size: 32px;
    }
`;

export const Photo = styled.figure`
    img{
        border-radius: 5px;
    }
`;

export const TimelineInfo = styled.div`
    padding-left: 30px;
    padding-right: 30px;
    flex: 0 0 50%;
    max-width: 50%;
    @media ${device.small}{
        flex: 0 0 100%;
        max-width: 100%;
    }
    @media ${device.xsmall}{
        padding-left: 15px;
        padding-right: 15px;
    }
`;

export const TimelineInfoInner = styled.div`
    padding-top: 130px;
    width: 500px;
    max-width: 100%;
    @media ${device.medium}{
        padding-top: 60px;
    }
    @media ${device.small}{
        padding-top: 30px;
    }
`;

export const TimelineContent = styled.div`
    display: inline-block;
    width: 400px;
    max-width: 100%;
`;

export const Title = styled.h6`
    font-size: 24px;
    margin-bottom: 20px;
    @media ${device.medium}{
        font-size: 22px;
    }
`;

export const Description = styled.p`
    font-size: 18px;
    line-height: 2;
    @media ${device.xsmall}{
        font-size: 16px;
        line-height: 1.8;
    }
`;

export const Item = styled.div`
    position: relative;
    &:not(:first-child){
        margin-top: 68px;
        @media ${device.small}{
            padding-left: 45px;
            width: 100%;
        }
        @media ${device.xsmall}{
            padding-left: 25px;
        }
    }
    &:nth-child(2) {
        margin-top: 0;
    }

    ${props => props.align === 'left' && css`
        ${TimelineInfoInner}{
            float: right;
            text-align: left;
        }
        ${TimelineFeatureInner}{
            text-align: right;
            float: left;
            @media ${device.small}{
                text-align: left;
            }
        }
    `}
    ${props => props.align === 'right' && css`
        ${TimelineRow}{
            flex-direction: row-reverse;
        }
        ${TimelineInfoInner}{
            float: left;
            text-align: right;
            @media ${device.small}{
                text-align: left;
            }
        }
        ${TimelineFeatureInner}{
            text-align: left;
            float: right;
        }
    `}
`;