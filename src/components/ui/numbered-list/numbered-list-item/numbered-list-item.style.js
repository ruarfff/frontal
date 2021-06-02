import styled from "styled-components";
import {
	device
} from "@theme";
import Anchor from "@ui/anchor";

export const ItemAnchor = styled(Anchor)
	`
    display: flex;
`;

export const Marker = styled.div`
    font-size: 24px;
    font-weight: 800;
    line-height: 1.2;
    margin-right: 10px;
    min-width: 45px;
    color: ${props => props.theme.colors.silver};
    @media ${device.small}{
        font-size: 20px;
        min-width: 40px;
        margin-right: 5px;
    }
`;

export const TitleWrap = styled.div`
    overflow: hidden;
    margin-top: 14px;
    padding-top: 20px;
    border-top: 2px solid ${props => props.theme.colors.borderColor};
    flex-grow: 1;
`;

export const TitleInner = styled.div`
    position: relative;
`;

export const Title = styled.h6`
    font-size: 24px;
    line-height: 1.2;
    transition: ${props => props.theme.transition};
    padding-right: 15px;
    @media ${device.small}{
        font-size: 20px;
    }
`;


export const IconWrap = styled.div`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 60px;
    height: 30px;
    .icon{
        font-size: 30px;
        transition: ${props => props.theme.transition};
        color: ${props => props.theme.colors.headingColor};
        &-1{
            opacity: 0;
            visibility: hidden;
        }
    }
`;
export const ItemWrap = styled.li`
    position: relative;
    padding: 0;
    margin-bottom: 62px;
    @media ${device.small}{
        margin-bottom: 45px;
    }
    &:last-child{
        margin-bottom: 0;
        padding-bottom: 0;
    }
    &:hover{
        ${Title},
        ${Marker}{
            color: ${props => props.theme.colors.themeColor};
        }
        ${IconWrap}{
            .icon{
                &-1{
                    opacity: 1;
                    visibility: visible;
                    transform: translateX(30px);
                    color: ${props => props.theme.colors.themeColor};
                }
                &-2{
                    opacity: 0;
                    visibility: hidden;
                }
            }
        }
    }
`;