import styled from "styled-components";
import { device } from "@theme";

export const HeaderFormWrap = styled.div`
    height: 100%;
    max-width: 225px;
    display: flex;
    align-items: center;
    background: transparent;
    position: relative;
    @media ${device.xxlarge}{
        max-width: 170px;
    }
    @media ${device.large}{
        max-width: 200px;
    }
    @media ${device.small}{
        input {
            height: 40px;
        }
    }
    @media ${device.xsmall}{
        border: none;
        max-width: 100%;
        input{
            background-color: #eee;
            border-radius: 0;
            &:focus{
                background-color: #eee !important;
            }
        }
    }
`;

export const ButtonWrap = styled.div`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    @media ${device.xsmall}{
        right: 5px;
    }
`;