import styled from "styled-components";
import BackgroundImage from "gatsby-background-image";

export const HeroWrapper = styled(BackgroundImage)`
    height: 770px;
    display: flex;
    align-items: center;
    background-attachment: scroll;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${props => props.theme.colors.black};
`;

export const HeroTextBox = styled.div`
    text-align: center;
`;