import styled from "styled-components";
import { device } from "@theme";

export const ErrorWrap = styled.div`
    padding-bottom: 120px;
    padding-top: 120px;
    height: 100vh;
    text-align: center;
    @media ${device.medium}{
        padding-bottom: 100px;
        padding-top: 100px;
    }
    @media ${device.small}{
        padding-bottom: 80px;
        padding-top: 80px;
    }
    h1{
        font-size: 250px;
        font-weight: 900;
        letter-spacing: 10px;
        line-height: 1.1;
        margin-bottom: 30px;
        padding: 0;
        color: ${props => props.theme.colors.themeColor};
        @media ${device.large}{
            font-size: 200px;
        }
        @media ${device.medium}{
            font-size: 150px;
            letter-spacing: 8px;
        }
        @media ${device.small}{
            font-size: 100px;
            letter-spacing: 5px;
        }
    }
    h2{
        font-size: 25px;
        margin-bottom: 31px;
    }
    p{
        margin-bottom: 36px;
    }
`;