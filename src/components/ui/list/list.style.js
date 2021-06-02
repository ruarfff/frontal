import styled, { css } from "styled-components";
import { ListItemWrap } from './list-item/list-item.style'

export const ListWrap = styled.ul`
    list-style: outside none none;
    padding: 0;
    margin-left: ${props => props.ml || 0};
    margin-right: ${props => props.mr || 0};
    margin-top: ${props => props.mt || 0};
    margin-bottom: ${props => props.mb || 0};
    ${props => props.as === 'ol' && css`
        min-width: 45px;
        margin: 0;
        padding-left: 30px;
        list-style: ${props => props.liststyle || 'decimal'};
    `} 
    ${props => props.child && css`
        ${ListItemWrap}{
            font-weight: ${props => props.child.fontweight};
            font-size: ${props => props.child.fontSize};
            margin-bottom: ${props => props.child.mb};
            ${props => props.child.color === 'textColor' && css`
                color: ${props => props.theme.colors.textColor};
                a{
                    color: ${props => props.theme.colors.textColor};
                }
            `}
        }
    `}
    ${ListItemWrap}{
        &:last-child{
            margin-bottom: 0;
            padding-bottom: 0;
        }
        ${props => props.layout === 'separator' && css`
            position: relative;
            margin-bottom: 6px;
            padding-bottom: 6px;
            &:before{
                position: absolute;
                bottom: 0px;
                left: 0;
                content: '';
                height: 1px;
                width: 100%;
                background: #eee;
            }
            &:last-child{
                &:before{
                    display: none;
                }
            }
        `}
        ${props => props.layout === 'check' && css`
            position: relative;
            margin-bottom: 10px;
            .icon{
                color: ${props => props.theme.colors.themeColor};
                font-size: 14px;
                margin-right: 15px;
            }
        `}
        ${props => props.layout === 'circle' && css`
            position: relative;
            padding-left: 14px;
            margin-bottom: 12px;
            &:before{
                content: '';
                position: absolute;
                top: 8px;
                left: 0;
                display: block;
                width: 5px;
                height: 5px;
                border-radius: 50%;
                background: #999;
            }
        `}
        ${props => props.layout === 'icon' && css`
            position: relative;
            margin-bottom: 12px;
            .icon{
                color: ${props => props.theme.colors.themeColor};
                font-size: 16px;
                margin-right: 10px;
            }
        `}
        ${props => props.layout === 'order-list' && css`
            position: relative;
            padding-left: 0px;
            margin-bottom: 12px;
            font-size: 24px;
            color: #333;
            line-height: 1.2;
            font-weight: 400;
        `}
        ${props => props.layout === 'animated-arrow' && css`
            position: relative;
            padding-left: 30px;
            &:before, 
            &:after{
                content: '\f30b';
                position: absolute;
                top: 4px;
                left: 0;
                line-height: 1;
                font-family: 'Font Awesome 5 Pro';
                font-weight: 900;
                transition: ${props => props.theme.transition};
            }
            &:before{
                color: ${props => props.theme.colors.themeColor};
                opacity: 0;
                visibility: hidden;
                transform: translateX(-100%);
            }
            &:after{
                color: ${props => props.theme.colors.textColor};
            }
            &:hover{
                &:after{
                    opacity: 0;
                    visibility: hidden;
                    transform: translateX(100%);
                }
                &:before{
                    opacity: 1;
                    visibility: visible;
                    transform: translateX(0);
                }
            }
        `}
    }
`;