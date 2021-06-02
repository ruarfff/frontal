import styled from "styled-components";
import { device } from "@theme";

export const BoxIconInner = styled.div`
    padding: 30px;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    @media ${device.medium}{
        padding: 20px;
    }
`;

export const BoxIconTop = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

export const IconWrap = styled.div`
    flex-shrink: 0;
    font-size: 48px;
    min-width: 60px;
    margin-right: 10px;
    color: ${props => props.theme.colors.secondary};
    height: 60px;
    display: inherit;
`;

export const Heading = styled.h5`
    color: ${props => props.theme.colors.themeColor};
`;

export const BoxIconBottom = styled.div``;

export const Text = styled.p``;

export const BoxIconWrap = styled.div`
    &:hover{
        ${BoxIconInner}{
            transform: translateY(-5px);
            background: #fff;
            box-shadow: 0 0 40px rgba(51,51,51,0.1);
        }
    }
`;