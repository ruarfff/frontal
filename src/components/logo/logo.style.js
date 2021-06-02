import styled, { css } from "styled-components";
// import {device} from '../../theme'

export const LogoWrapper = styled.div`
    display: flex;
    justify-content: ${props => props.justifycontent};
    padding-top: ${props => props.pt};
    padding-bottom: ${props => props.pb};
    a{
        img{
            width: 160px;
        }
    }

    ${props => props.whiteLogo && css`
        .dark-logo {
            display: none !important;
        }
        .light-logo {
            display: inherit;
        }
    `}
    ${props => !props.whiteLogo && css`
        .dark-logo {
            display: inherit;
        }
        .light-logo {
            display: none !important;
        }
    `}
`;