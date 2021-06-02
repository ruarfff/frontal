import styled, { css } from "styled-components";

export const PricingTableInner = styled.div`
    position: relative;
    overflow: hidden;
    transition: all 0.7s cubic-bezier(0.645, 0.045, 0.355, 1);
    text-align: center;
    padding: 34px 20px 40px;
    border: 1px solid #dce6ed;
    border-radius: 5px;
    background-color: #ffffff;
`;

export const PricingTableHeader = styled.header`
    margin-bottom: 25px;
`;

export const PricingTableTitle = styled.h5`
    color: #333;
    margin-bottom: 24px;
    text-transform: capitalize;
`;


export const PricingTablePrice = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    font-weight: 500;
    sup{
        font-size: 15px;
        margin-bottom: 0;
        color: #ababab;
        top: 10px;
    }
    h6{
        font-size: 56px;
        line-height: .8;
        margin: 0 4px;
        font-weight: 300;
        color: #333;
    }
    sub{
        font-size: 15px;
        margin-bottom: 0;
        color: #ababab;
        align-self: flex-end;
        bottom: 10px;
    }
`;

export const PricingTableBody = styled.div``;

export const PricingTableList = styled.ul`
    li{
        position: relative;
        display: block;
        padding: 5px 0;
    }
`;

export const PricingTableFooter = styled.footer`
    margin-top: 30px;
    padding-top: 8px;
`;

export const PricingTableWrap = styled.div`
    margin-bottom: 30px;
    &:hover{
        ${PricingTableInner}{
            box-shadow: 0 2px 30px rgba(89, 69, 230, 0.12);
            border: 0 solid transparent;
            padding: 35px 21px 41px;
            transform: translateY(-5px);
        }
    }
    ${props => props.isFeatured && css`
        ${PricingTableInner}{
            box-shadow: 0 2px 30px rgba(89, 69, 230, 0.12);
            border: 0 solid transparent;
            padding: 35px 21px 41px;
            background: #002FA6;
        }
        ${PricingTableTitle}{
            color: #fff;
        }
        ${PricingTablePrice}{
            sup,h6,sub{
                color: #fff;
            }
        }
        ${PricingTableList}{
            li{
                color: #fff;
            }
        }
    `}
`;

export const PricingTableFeatureMark = styled.div`
    position: absolute;
    top: -1px;
    right: -1px;
    width: 0;
    height: 0;
    border-top: 88px solid ${props => props.theme.colors.secondary};
    border-bottom: 88px solid transparent;
    border-left: 88px solid transparent;
    span{
        position: absolute;
        top: -72px;
        right: 6px;
        text-align: center;
        font-size: 11px;
        font-weight: 700;
        line-height: 1.19;
        display: block;
        color: #fff;
        transform: rotate(45deg);
    }
`;