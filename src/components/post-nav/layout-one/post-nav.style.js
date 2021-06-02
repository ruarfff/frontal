import styled, { css } from "styled-components";

export const NavItem = styled.div`
    ${props => props.rel === 'prev' && css`
        text-align: left;
        margin-right: auto;
    `}
    ${props => props.rel === 'next' && css`
        text-align: right;
        margin-left: auto;
    `}
`;

export const NavInner = styled.div`
    display: flex;
    align-items: center;
    min-height: 190px;
    padding: 20px 0;
    img{
        border-radius: 5px
    }
    i{
        font-size: 20px;
        font-weight: 400;
    }
    ${props => props.rel === 'next' && css`
        img{
            margin-left: 28px;
            padding-right: 30px;
        }
    `}
    ${props => props.rel === 'prev' && css`
        flex-direction: row-reverse;
        img{
            margin-right: 28px;
            padding-left: 30px;
        }
        .icon{
            transform: rotate(180deg)
        }
    `}
`;