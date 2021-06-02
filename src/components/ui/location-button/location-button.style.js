import styled from "styled-components";

export const LocationBtnWrap = styled.div`
    margin-top: ${props => props.mt};
`;

export const LocationBtnText = styled.button`
    background: transparent;
    border: none;
    padding: 0;
    .button-icon{
        height: 56px;
        width: 56px;
        line-height: 56px;
        border-radius: 50%;
        text-align: center;
        background: #f6f2ed;
        margin-right: 14px;
        display: inline-block;
        .icon{
            color: #086AD8;
            font-size: 18px;
        }
    }
    .button-text{
        font-weight: 500;
        color: #086AD8;
        position: relative;
        &:after{
            content: '';
            width: 0;
            height: 1px;
            bottom: 0;
            position: absolute;
            left: auto;
            right: 0;
            transition: width 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
            background: currentColor;
        }
    }
    &:hover{
        .button-text{
            &:after{
                width: 100%;
                left: 0;
                right: auto;
            }
        }
    }
`;