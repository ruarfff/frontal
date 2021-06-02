import styled, { css } from "styled-components";
import { device } from "@theme";

export const SocialShareWrap = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
`;

export const SocialMediaWrap = styled.div`
position: relative;
margin-left: 10px;
`;

export const FloatingSocialBox = styled.div`
position: absolute;
bottom: 100%;
right: 0%;
transform: translate(0%, -1px);
width: auto;
white-space: nowrap;
padding: 0 4px;
text-align: center;
background: #fff;
border-radius: 5px;
box-shadow: 0 2px 20px rgba(0,0,0,0.06);
user-select: none;
filter: drop-shadow(0 2px 20px rgba(0,0,0,0.06));
z-index: 999;
padding: 10px 15px;
visibility: hidden;
opacity: 0;
transition: ${props => props.theme.transition};
${props => props.isOpen && css`
    transform: translate(0%, -12px);
    visibility: visible;
    opacity: 1;
`}
@media ${device.small}{
    right: 10%;
}
&:before{
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(100%);
    content: '';
    border-top: 8px solid #fff;
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
}
`;