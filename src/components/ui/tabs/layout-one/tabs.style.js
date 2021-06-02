import styled from "styled-components";
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import { device } from "@theme";

export const TabHeader = styled(Nav)`
    margin: 0 -10px;
    width: 100%;
    justify-content: center;
    @media ${device.small}{
        margin: 0;
    }
`;

export const NavItem = styled(Nav.Link)`
    margin: 0 10px;
    text-align: center;
    align-self: center;
    flex-grow: 1;
    flex-basis: 0;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.3;
    text-transform: uppercase;
    letter-spacing: 1px;
    border: 1px solid #ededed !important;
    border: #ededed;
    background: #fff;
    color: #696969;
    padding: 21px 20px 19px;
    min-width: 200px;
    border-radius: 5px !important;
    @media ${device.large}{
        padding: 21px 10px 19px;
    }
    @media ${device.medium}{
        padding: 12px 13px 12px;
        min-width: 150px;
        margin-bottom: 10px;
    }
    @media ${device.small}{
        max-width: 45%;
        flex-basis: 45%;
    }
    @media ${device.xsmall}{
        max-width: 100%;
        flex-basis: 100%;
        margin-left: 0;
        margin-right: 0;
    }
    &.active{
        color: ${props => props.theme.colors.themeColor};
        border-color: ${props => props.theme.colors.themeColor} !important;
    }
`;

export const TabContent = styled(Tab.Content)`
    width: 100%;
    padding-top: ${props => props.pt};
    margin-top: ${props => props.mt};
`;

export const TabPane = styled(Tab.Pane)`
    width: 100%;
`;


export const TabsWrap = styled(Tab.Container)`

`;