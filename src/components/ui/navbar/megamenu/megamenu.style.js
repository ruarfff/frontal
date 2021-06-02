import styled, { css } from "styled-components";
import { device } from "@theme";

export const MegamenuWrap = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    box-shadow: 0 2px 29px rgba(0,0,0,0.05);
    border-bottom: 3px solid #086AD8;
    background-color: #ffffff;
    transform: translateY(50px);
    transition: all 0.7s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-delay: 0.2s;
    transition-duration: 0.4s;
    visibility: hidden;
    opacity: 0;
    z-index: -1;
    min-width: 980px;
    width: 100%;
    padding: 35px 20px 30px;
    display: flex;
    justify-content: space-around;
	ul{
		pointer-events: none;
	}
    ${props => props.fullwidth && css`
        padding: 35px 220px 30px;
    `}
    @media ${device.xlarge}{
        min-width: 700px;
        padding-left: 50px;
        padding-right: 50px;
    }
`;