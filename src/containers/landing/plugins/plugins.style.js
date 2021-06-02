import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import { device } from "@theme";

export const PluginsWrap = styled(BackgroundImage)`
    background-color: #f6f2ed;
    background-size: auto !important;
    background-position: bottom right !important;
    padding-top: 80px;
    @media ${device.medium}{
        padding-top: 60px;
    }
    @media ${device.small}{
        padding-top: 40px;
    }
`;

export const ImageWrap = styled.div`
    text-align: right;
`;

export const PluginsTextWrap = styled.div`
    max-width: 500px;
    width: 100%;
    margin: auto;
`;

export const FeaturesWrap = styled.div`
    margin-left: auto;
    max-width: 420px;
    margin-top: 30px;
    transition: ${props => props.theme.transition};
`;

export const IconBoxWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const IconBoxImage = styled.div`
    position: relative;
    flex-shrink: 0;
    flex-basis: 90px;
    max-width: 90px;
    text-align: center;
    border-radius: 50%;
    @media ${device.xsmall}{
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 20px;
    }
`;

export const IconBoxContent = styled.div`
    flex-basis: calc(100% - 90px);
    max-width: calc(100% - 90px);
    padding-left: 27px;
    @media ${device.xsmall}{
        text-align: center;
        flex-basis: 100%;
        max-width: 100%;
        padding-left: 0;
    }
`;