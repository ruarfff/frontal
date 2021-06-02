import styled from "styled-components";
import { device } from "../../../../theme";

export const SearchFromWrap = styled.div`
    position: relative;
    max-width: 1200px;
    padding: 0 15px;
    width: 100%;
    margin: auto;
    input{
        background-color: transparent;
        border: 0;
        border-bottom: 2px solid ${props => props.theme.colors.themeColor};
        border-radius: 0;
        padding: 15px 50px 15px 0;
        width: 100%;
        color: ${props => props.theme.colors.textColor};
        font-size: 72px; 
        height: 100px;
        @media ${device.small}{
            font-size: 24px;
            height: 60px;
        }
        &:hover,
        &:focus{
            color: ${props => props.theme.colors.textColor};
        }
        &::placeholder,
        &::-webkit-input-placeholder {
            color: ${props => props.theme.colors.themeColor} !important;
        }
        &:-ms-input-placeholder {
            color: ${props => props.theme.colors.themeColor} !important;
        }
    }
`;