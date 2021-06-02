import styled, { css } from "styled-components";
import { device } from "@theme";
import BackgroundImage from "gatsby-background-image";


const sectionStyle = css`
    ${props => props.bgColor === 'primary' && css`
        background-color: ${props => props.theme.colors.primary};
    `}
    ${props => props.bgColor !== 'primary' && css`
        background-color: ${props => props.bgColor};
    `}
    padding-top: ${props => props.pt};
    padding-bottom: ${props => props.pb};
    padding-left: ${props => props.pl};
    padding-right: ${props => props.pr};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    margin-left: ${props => props.ml};
    margin-right: ${props => props.mr};
    ${props => props.bgrepeat && css`
        background-repeat: ${props => props.bgrepeat} !important;
    `}
    ${props => props.bgposition && css`
        background-position: ${props => props.bgposition} !important;
    `}
    ${props => props.bgsize && css`
        background-size: ${props => props.bgsize} !important;
    `}
    &:before,
    &:after{
        ${props => props.bgrepeat && css`
            background-repeat: ${props => props.bgrepeat} !important;
        `}
        ${props => props.bgposition && css`
            background-position: ${props => props.bgposition} !important;
        `}
        ${props => props.bgsize && css`
            background-size: ${props => props.bgsize} !important;
        `}
    }
    ${props => props.responsive && css`
        ${props => props.responsive.xlarge && css`
            @media ${device.xlarge}{
                padding-top: ${props => props.responsive.xlarge.pt};
                padding-bottom: ${props => props.responsive.xlarge.pb};
                padding-left: ${props => props.responsive.xlarge.pl};
                padding-right: ${props => props.responsive.xlarge.pr};
                margin-top: ${props => props.responsive.xlarge.mt};
                margin-bottom: ${props => props.responsive.xlarge.mb};
                margin-left: ${props => props.responsive.xlarge.ml};
                margin-right: ${props => props.responsive.xlarge.mr};
            }
        `}
        ${props => props.responsive.large && css`
            @media ${device.large}{
                padding-top: ${props => props.responsive.large.pt};
                padding-bottom: ${props => props.responsive.large.pb};
                padding-left: ${props => props.responsive.large.pl};
                padding-right: ${props => props.responsive.large.pr};
                margin-top: ${props => props.responsive.large.mt};
                margin-bottom: ${props => props.responsive.large.mb};
                margin-left: ${props => props.responsive.large.ml};
                margin-right: ${props => props.responsive.large.mr};
            }
        `}
        ${props => props.responsive.medium && css`
            @media ${device.medium}{
                padding-top: ${props => props.responsive.medium.pt};
                padding-bottom: ${props => props.responsive.medium.pb};
                padding-left: ${props => props.responsive.medium.pl};
                padding-right: ${props => props.responsive.medium.pr};
                margin-top: ${props => props.responsive.medium.mt};
                margin-bottom: ${props => props.responsive.medium.mb};
                margin-left: ${props => props.responsive.medium.ml};
                margin-right: ${props => props.responsive.medium.mr};
            }
        `}
        ${props => props.responsive.small && css`
            @media ${device.small}{
                padding-top: ${props => props.responsive.small.pt};
                padding-bottom: ${props => props.responsive.small.pb};
                padding-left: ${props => props.responsive.small.pl};
                padding-right: ${props => props.responsive.small.pr};
                margin-top: ${props => props.responsive.small.mt};
                margin-bottom: ${props => props.responsive.small.mb};
                margin-left: ${props => props.responsive.small.ml};
                margin-right: ${props => props.responsive.small.mr};
                ${props => props.responsive.small.fullwidth && css`
                    .container{
                        max-width: 100%;
                    }
                `}
            }
        `}
        ${props => props.responsive.xsmall && css`
            @media ${device.xsmall}{
                padding-top: ${props => props.responsive.xsmall.pt};
                padding-bottom: ${props => props.responsive.xsmall.pb};
                padding-left: ${props => props.responsive.xsmall.pl};
                padding-right: ${props => props.responsive.xsmall.pr};
                margin-top: ${props => props.responsive.xsmall.mt};
                margin-bottom: ${props => props.responsive.xsmall.mb};
                margin-left: ${props => props.responsive.xsmall.ml};
                margin-right: ${props => props.responsive.xsmall.mr};
            }
        `}
    `}
`;

export const WrapperStyled = styled.section`
    ${sectionStyle}
`;

export const WrapperBgStyled = styled(BackgroundImage)`
    ${sectionStyle}
`;