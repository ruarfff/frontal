import styled, { css } from "styled-components";
import { device } from "@theme";
import BackgroundImage from "gatsby-background-image";

export const BannerArea = styled(BackgroundImage)`
    padding-top: 85px;
    padding-bottom: 195px;
    @media ${device.large}{
        padding-top: 120px;
        padding-bottom: 120px;
    }
    @media ${device.medium}{
        padding-top: 100px;
        padding-bottom: 100px;
    }
    @media ${device.small}{
        padding-top: 60px;
        padding-bottom: 60px;
    }
`;

export const BannerTextWrap = styled.div`
    text-align: center;
`;

export const OverviewArea = styled.section`
    padding-top: 100px;
`;

export const ClientBox = styled.div`
    margin-top: 60px;
`;

export const MetaBox = styled.div`
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
    padding-top: 16px;
    padding-bottom: 16px;
    ${props => props.boxtype === 'share-box' && css`
        border-bottom: none;
        margin-top: 0;
    `}
`;

export const ProblemArea = styled.section`
    padding-top: 60px;
`;

export const ProblemBox = styled.div`
    border-bottom: 1px solid #eee;
    padding-bottom: 50px;
    margin-bottom: 44px;
`;

export const ProblemTextBox = styled.div`
    display: flex;
`;

export const ResultArea = styled.section`
    padding-top: 60px;
    padding-bottom: 60px;
`;

export const FaqArea = styled.div`
    padding-bottom: 70px;
`;

export const VideoBoxWrap = styled.div`
    position: relative;
    @media ${device.medium}{
        margin-top: 30px;
    }
    img{
        border-radius: 5px;
    }
`;

export const VideoBtnWrap = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

export const NavigationArea = styled.div``;

export const Navigtion = styled.div`
    display: flex;
    justify-content: space-between;
`;