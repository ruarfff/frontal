import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";
import { device } from "@theme";

export const SectionWrap = styled(BackgroundImage)`
    padding-top: 120px;
    padding-bottom: 120px;
    background-color: #eff2f6;
    @media ${device.medium}{
        padding-top: 80px;
        padding-bottom: 80px;
    }
`;

export const ContactTextBox = styled.div``;

export const ContactInfoBox = styled.div`
    text-align: center;
    @media ${device.medium}{
        margin-top: 45px;
    }
    .icon{
        font-size: 40px;
        margin-bottom: 10px;
        color: ${props => props.theme.colors.themeColor};
    }
`;