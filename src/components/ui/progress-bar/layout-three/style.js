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
        height: 16px;
        overflow: visible;
        font-size: 14px;
        border-radius: 0;
        height: 32px;
        padding: 6px;
        border-radius: 30px;
        -webkit-box-shadow: none;
        box-shadow: none;
        background-color: #f2f2f2;
        &-bar{
            background: ${props => props.theme.colors.themeColor};
            position: relative;
            top: auto;
            bottom: auto;
            left: auto;
            right: auto;
            border-radius: inherit;
        }
        .percent-label{
            top: 50%;
            transform: translateY(-50%);
            right: 15px;
            display: block;
            font-size: 12px;
            font-weight: 500;
            color: #fff;
            position: absolute;
        }
    }
`;