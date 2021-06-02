import styled, { css } from "styled-components";
import { Col } from "react-bootstrap";
import { device } from "@theme";

export const Colwrap = styled(Col)`
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    margin-left: ${props => props.ml};
    margin-right: ${props => props.mr};
    padding-top: ${props => props.pt};
    padding-bottom: ${props => props.pb};
    text-align: ${props => props.textalign};
    ${props => props.responsive && css`
        ${props => props.responsive.medium && css`
            @media ${device.medium}{
                margin-top: ${props => props.responsive.medium.mt};
                margin-bottom: ${props => props.responsive.medium.mb};
                margin-left: ${props => props.responsive.medium.ml};
                padding-top: ${props => props.responsive.medium.pt};
                padding-bottom: ${props => props.responsive.medium.pb};
            }
        `}
        ${props => props.responsive.small && css`
            @media ${device.small}{
                margin-top: ${props => props.responsive.small.mt};
                margin-bottom: ${props => props.responsive.small.mb};
                margin-left: ${props => props.responsive.small.ml};
                padding-top: ${props => props.responsive.small.pt};
                padding-bottom: ${props => props.responsive.small.pb};
            }
        `}
    `}
`;