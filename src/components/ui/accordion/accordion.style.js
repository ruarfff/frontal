import styled, { css } from "styled-components";
import { device } from "@theme";

export const AccordionWrapper = styled.div`
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    ${props => props.responsive && css`
        ${props => props.responsive.xlarge && css`
            @media ${device.xlarge}{
                margin-top: ${props => props.responsive.xlarge.mt};
                margin-bottom: ${props => props.responsive.xlarge.mb};
            }        
        `}
        ${props => props.responsive.large && css`
            @media ${device.large}{
                margin-top: ${props => props.responsive.large.mt};
                margin-bottom: ${props => props.responsive.large.mb};
            }        
        `}
        ${props => props.responsive.medium && css`
            @media ${device.medium}{
                margin-top: ${props => props.responsive.medium.mt};
                margin-bottom: ${props => props.responsive.medium.mb};
            }        
        `}
        ${props => props.responsive.small && css`
            @media ${device.small}{
                margin-top: ${props => props.responsive.small.mt};
                margin-bottom: ${props => props.responsive.small.mb};
            }
        `}
        ${props => props.responsive.xsmall && css`
            @media ${device.xsmall}{
                margin-top: ${props => props.responsive.xsmall.mt};
                margin-bottom: ${props => props.responsive.xsmall.mb};
            }
        `}
    `}

    ${props => props.layout === 'one' && css`
        .accordion {
            border-width: 0px;
            border-radius: 0;
            &__item{
                border-bottom: none;
                margin-bottom: 20px;
                border: none !important;
                box-shadow: 0 18px 40px rgba(51,51,51,0.1);
            }
            &__heading{
                padding: 0;
                border-bottom: 0;
                background-color: ${props => props.theme.colors.white};
            }
            &__button{
                border: none;
                width: 100%;
                text-align: left;
                color: #000000;
                padding: 20px 30px;
                position: relative;
                overflow-wrap: break-word;
                white-space: normal;
                font-size: 18px;
                line-height: 1.2;
                font-weight: 500;
                border-radius: 5px;
                background: ${props => props.theme.colors.white};
                @media ${device.small}{
                    padding: 20px 30px 20px 20px;
                }
                &:hover{
                    background: ${props => props.theme.colors.white};
                }
                &:before{
                    position: absolute;
                    right: 35px;
                    top: 50%;
                    margin-top: -7px;
                    margin-right: 0;
                    transform: rotate(45deg);
                    transition: all .3s;
                    @media ${device.small}{
                        right: 20px;
                    }
                }
                &[aria-expanded="true"]{
                    color: ${props => props.theme.colors.white};
                    background: ${props => props.theme.colors.secondary};
                    border-bottom-left-radius: 0;
                    border-bottom-right-radius: 0;
                    &:before{
                        margin-top: -3px;
                        transform: rotate(-135deg);
                    }
                }
            }
            &__panel{
                padding: 23px 30px 29px;
                @media ${device.small}{
                    padding: 23px 20px 29px;
                }
            }
        }
    `}

    ${props => props.layout === 'two' && css`
        .accordion {
            border-width: 0px;
            border-radius: 0;
            &__item{
                border-bottom: none;
                margin-bottom: 20px;
                border: none;
                border-top: 0 !important;
                border-bottom: 1px solid #ebebeb;
            }
            &__heading{
                padding: 0;
                border-bottom: 0;
                background-color: transparent;
            }
            &__button{
                font-weight: 800;
                font-size: 24px;
                border: none;
                width: 100%;
                text-align: left;
                color: #ababab;
                padding: 20px 35px;
                position: relative;
                overflow-wrap: break-word;
                white-space: normal;
                line-height: 1.2;
                font-weight: 700;
                border-radius: 5px;
                background-color: transparent;
                @media ${device.small}{
                    font-size: 20px;
                    padding: 20px 25px;
                }
                @media ${device.xsmall}{
                    font-size: 18px;
                }
                &:hover{
                    background-color: transparent;
                }
                &:before{
                    position: absolute;
                    left: 2px;
                    margin-right: 0px;
                    top: 50%;
                    margin-top: -4px;
                }
                &[aria-expanded="true"]{
                    color: #086AD8;
                    border-bottom-left-radius: 0;
                    border-bottom-right-radius: 0;
                    &:before{
                        margin-top: -7px;
                    }
                }
            }
            &__panel{
                padding: 0px 30px 29px;
                @media ${device.small}{
                    padding: 0px 25px 29px;
                }
            }
        }
    `}

    
`;