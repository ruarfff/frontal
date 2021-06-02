import styled, { css } from "styled-components";
import { device } from "@theme";

export const NavItemWrap = styled.li`
    margin: 0 20px;  
    @media ${device.xlarge}{
        margin: 0 15px; 
    }
    ${props => props.hasSubmenu && css`
        position: relative;
    `}
    /* ${props => props.hasMegamenu && css`
        position: static;
    `} */
`;
