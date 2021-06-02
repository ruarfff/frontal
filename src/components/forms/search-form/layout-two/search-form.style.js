import styled, { css } from "styled-components";
import { device } from "@theme";

export const HeaderFormWrap = styled.div`
    height: 100%;
    max-width: 270px;
    display: flex;
    margin-left: auto;
    align-items: center;
    background: transparent;
    position: relative;
    @media ${device.small}{
        max-width: 100%;
        width: 100%;
        input {
            height: 40px;
        }
    }
    form{
        width: 100%;
    }
    ${props => props.layout === 'white' && css`
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
        input{
            background: transparent;
            color: #000;
            &:hover, &:focus{
                background: transparent !important;
                color: #000 !important;
            }
            &::placeholder,
            &::-webkit-input-placeholder {
                color: #000 !important;
            }
            &:-ms-input-placeholder {
                color: #000 !important;
            }
        }
        button{
            color: #000;
        }
    `}
`;

export const ButtonWrap = styled.div`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    @media ${device.xsmall}{
        right: 5px;
    }
`;