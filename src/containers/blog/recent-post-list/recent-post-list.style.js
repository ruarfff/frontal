import styled from "styled-components";
import Anchor from "@ui/anchor";

export const List = styled.ul`

`;

export const ListItem = styled.li`
    line-height: 1;
    overflow: hidden;
    &:not(:last-child){
        margin-bottom: 22px;
    }
`;

export const ListLink = styled(Anchor)`
    position: relative;
    font-weight: 600;
    font-size: 15px;
    color: ${props => props.theme.colors.textColor};
    padding-left: 25px;
    line-height: 1.6;
    .icon{
        font-size: 18px;
        margin-top: 5px;
        position: absolute;
        left: 0;
        transition: ${props => props.theme.transition};
        &-1{
            transform: translateX(-100%);
            visibility: hidden;
            opacity: 0;
        }
    }
    &:hover{
        .icon{
            &-1{
                transform: translateX(0);
                visibility: visible;
                opacity: 1;
            }
            &-2{
                visibility: hidden;
                opacity: 0;
                transform: translateX(100%);
            }
        }
    }
`;