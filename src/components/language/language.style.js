import styled, { css } from "styled-components";
import { device } from "@theme";

export const LanguageWrap = styled.div`
    ${props => props.spacer && css`
        padding-top: ${props => props.spacer.default && props.spacer.default.pt};
        padding-bottom: ${props => props.spacer.default && props.spacer.default.pb};
        padding-left: ${props => props.spacer.default && props.spacer.default.pl};
        padding-right: ${props => props.spacer.default && props.spacer.default.pr};
        @media ${device.xlarge}{
            padding-top: ${props => props.spacer.xl && props.spacer.xl.pt};
            padding-bottom: ${props => props.spacer.xl && props.spacer.xl.pb};
            padding-left: ${props => props.spacer.xl && props.spacer.xl.pl};
            padding-right: ${props => props.spacer.xl && props.spacer.xl.pr};
        }
        @media ${device.large}{
            padding-top: ${props => props.spacer.lg && props.spacer.lg.pt};
            padding-bottom: ${props => props.spacer.lg && props.spacer.lg.pb};
            padding-left: ${props => props.spacer.lg && props.spacer.lg.pl};
            padding-right: ${props => props.spacer.lg && props.spacer.lg.pr};
        }
        @media ${device.medium}{
            padding-top: ${props => props.spacer.md && props.spacer.md.pt};
            padding-bottom: ${props => props.spacer.md && props.spacer.md.pb};
            padding-left: ${props => props.spacer.md && props.spacer.md.pl};
            padding-right: ${props => props.spacer.md && props.spacer.md.pr};
        }
        @media ${device.small}{
            padding-top: ${props => props.spacer.sm && props.spacer.sm.pt};
            padding-bottom: ${props => props.spacer.sm && props.spacer.sm.pb};
            padding-left: ${props => props.spacer.sm && props.spacer.sm.pl};
            padding-right: ${props => props.spacer.sm && props.spacer.sm.pr};
        }
        @media ${device.xsmall}{
            padding-top: ${props => props.spacer.xs && props.spacer.xs.pt};
            padding-bottom: ${props => props.spacer.xs && props.spacer.xs.pb};
            padding-left: ${props => props.spacer.xs && props.spacer.xs.pl};
            padding-right: ${props => props.spacer.xs && props.spacer.xs.pr};
        }
    `};
`;