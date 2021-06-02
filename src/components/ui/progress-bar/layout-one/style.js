import styled from "styled-components";

export const ProgressBarWrap = styled.div`
    &:not(:last-child){
        margin-bottom: ${props => props.mb};
        padding-bottom: ${props => props.pb};
    }
    .heading{
        color: ${props => props.theme.colors.kimberly};
        margin-bottom: 12px;
        font-weight: 400;
    }
    .progress{
        height: 4px;
        overflow: visible;
        font-size: 14px;
        background-color: ${props => props.theme.colors.whiteSmoke};
        border-radius: 0;
        &-bar{
            position: relative;
            background: ${props => props.theme.colors.themeColor};
            color: ${props => props.theme.colors.themeColor};
        }
    }
`;