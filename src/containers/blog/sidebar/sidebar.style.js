import styled from "styled-components";

export const SidebarWrap = styled.aside`
    padding-right: 30px;
    height: 100%;
`;

export const RecentWidgetBox = styled.div`
    margin-bottom: 50px;
`;

export const RecentPostListWrap = styled.div`
    li{
        padding-bottom: 15px;
        margin-bottom: 18px;
        &:not(:last-child){
            border-bottom: 1px solid ${props => props.theme.colors.borderColor};
        }
        &:before,
        &:after{
            font-size: 18px;
        }
    }
    a{
        font-size: 18px;
        font-weight: 600;
    }
`;

export const AdWidgetBox = styled.div`
    margin-bottom: 47px;
`;

export const TagWidgetBox = styled.div``;