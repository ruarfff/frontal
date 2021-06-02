import styled from "styled-components";

export const ExpandButtonWrap = styled.span`
    display: block;
    width: 40px;
    height: 40px;
    background: rgba(255,255,255,0.1);
    color: #fff;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
    transition: ${props => props.theme.transition};
    .icon{
        font-size: 25px;
        width: 25px;
        line-height: 40px;
    }
`;