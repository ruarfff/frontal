import styled, { css } from "styled-components";
import { device } from "@theme";

export const FooterWrap = styled.footer`
    background-color: ${props => props.bgcolor};
    ${props => props.reveal === 'true' && css`
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: -1;
    `};
`;

export const FooterTop = styled.div`
    padding-top: 80px;
    padding-bottom: 80px;
    @media ${device.medium}{
        padding-top: 60px;
        padding-bottom: 60px;
    }
    @media ${device.small}{
        padding-top: 40px;
        padding-bottom: 40px;
    }
`;

export const FooterBottom = styled.div`
    padding-bottom: 30px;
`;

export const FooterWidget = styled.div`
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    margin-left: ${props => props.ml};
    margin-right: ${props => props.mr};
    ${props => props.responsive && css`
        ${props => props.responsive.large && css`
            @media ${device.large}{
                margin-top: ${props => props.responsive.large.mt};
                margin-bottom: ${props => props.responsive.large.mb};
                margin-left: ${props => props.responsive.large.ml};
                margin-right: ${props => props.responsive.large.mr};
            }
        `}
        ${props => props.responsive.medium && css`
            @media ${device.medium}{
                margin-top: ${props => props.responsive.medium.mt};
                margin-bottom: ${props => props.responsive.medium.mb};
                margin-left: ${props => props.responsive.medium.ml};
                margin-right: ${props => props.responsive.medium.mr};
            }
        `}
        ${props => props.responsive.small && css`
            @media ${device.small}{
                margin-top: ${props => props.responsive.small.mt};
                margin-bottom: ${props => props.responsive.small.mb};
                margin-left: ${props => props.responsive.small.ml};
                margin-right: ${props => props.responsive.small.mr};
            }
        `}
        ${props => props.responsive.xsmall && css`
            @media ${device.xsmall}{
                margin-top: ${props => props.responsive.xsmall.mt};
                margin-bottom: ${props => props.responsive.xsmall.mb};
                margin-left: ${props => props.responsive.xsmall.ml};
                margin-right: ${props => props.responsive.xsmall.mr};
            }
        `}
    `}
`;

export const LogoWidget = styled.figure`
    margin-bottom: 30px;
`;

export const TextWidget = styled.div``;

export const FooterWidgetList = styled.ul`
    li{
        &:not(:last-child){
            margin-bottom: 10px;
        }
    }
`