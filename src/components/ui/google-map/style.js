import styled, { css } from "styled-components";
import { animateUpDown } from "@assets/css/animations";
import { device } from "@theme";

export const GooglMapWrap = styled.div`
    width: 100%;
    height: 400px;
    @media ${device.small}{
        height: 300px;
    }
    .marker{
        ${props => props.marker === "animated" && css`
            img{
                animation-timing-function: cubic-bezier(0.54, 0.085, 0.5, 0.92);
                animation-name: ${animateUpDown};
                animation-iteration-count: infinite;
                animation-fill-mode: both;
                animation-duration: 3s;
            }
        `}
    }
`;
