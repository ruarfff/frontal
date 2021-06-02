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
            &.gradient{
                &-1{
                    color: #61fded;
                    background-color: #0d8abc;
                    background-image: -webkit-linear-gradient(314deg, #0d8abc 0px, #61fded 100%);
                    background-image: -o-linear-gradient(314deg, #0d8abc 0px, #61fded 100%);
                    background-image: linear-gradient(-224deg, #0d8abc 0px, #61fded 100%);
                }
                &-2{
                    color: #eece90;
                    background-color: #d45529;
                    background-image: -webkit-linear-gradient(314deg, #d45529 0px, #eece90 100%);
                    background-image: -o-linear-gradient(314deg, #d45529 0px, #eece90 100%);
                    background-image: linear-gradient(-224deg, #d45529 0px, #eece90 100%);
                }
                &-3{
                    color: #5c51ff;
                    background-color: #f646a9;
                    background-image: -webkit-linear-gradient(314deg, #f646a9 0px, #5c51ff 100%);
                    background-image: -o-linear-gradient(314deg, #f646a9 0px, #5c51ff 100%);
                    background-image: linear-gradient(-224deg, #f646a9 0px, #5c51ff 100%);
                }
                &-4{
                    color: #e5529a;
                    background-color: #e77654;
                    background-image: -webkit-linear-gradient(314deg, #e77654 0px, #e5529a 100%);
                    background-image: -o-linear-gradient(314deg, #e77654 0px, #e5529a 100%);
                    background-image: linear-gradient(-224deg, #e77654 0px, #e5529a 100%);
                }
            }
        }
    }
`;