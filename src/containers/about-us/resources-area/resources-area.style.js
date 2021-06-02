import styled from "styled-components";
import { device } from "@theme";
import BackgroundImage from "gatsby-background-image";

export const ResourcesWrapper = styled(BackgroundImage)`
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f8f8f8;
    background-size: auto;
    background-position: center right 40px;
`;

export const LeftBox = styled.div`
    max-width: 600px;
    padding-left: 30px;
    padding-right: 30px;
    margin-left: auto;
    @media ${device.medium}{
        margin-right: auto;
        text-align: center;
    }
`;

export const ImageBox = styled.div`
    text-align: center;
`;