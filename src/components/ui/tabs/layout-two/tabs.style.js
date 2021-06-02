import styled from "styled-components";
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'

export const TabHeader = styled(Nav)`
    width: 100%;
    justify-content: center;
    margin-bottom: 60px;
`;

export const NavItem = styled(Nav.Link)`
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
    border: 1px solid #ededed;
    background: #fff;
    color: #454545;
    padding: 18px 10px 16px;
    min-width: 160px;
    border-radius: 0;
    text-align: center;
    &:first-child{
        border-top-left-radius: 5px !important;
        border-bottom-left-radius: 5px !important;
    }
    &:last-child{
        border-top-right-radius: 5px !important;
        border-bottom-right-radius: 5px !important;
    }
    &.active{
        color: #fff;
        background-color: ${props => props.theme.colors.themeColor};
        border-color: ${props => props.theme.colors.themeColor} !important;
    }
`;

export const TabContent = styled(Tab.Content)`
    width: 100%;
`;

export const TabPane = styled(Tab.Pane)`
    width: 100%;
`;


export const TabsWrap = styled(Tab.Container)`

`;