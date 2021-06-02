import styled, { css } from "styled-components";
import { device } from "@theme";


export const TestimonialWrap = styled.div`
    position: relative;
    background: ${props => props.bgColor || '#fff'};
    padding: ${props => props.p || '31px 50px 47px'};
    border-radius:  ${props => props.borderRadius || '5px'};
    margin:  ${props => props.m || '20px 15px 35px'};
    box-shadow:  ${props => props.shadow || '0 0 20px rgba(51,51,51,0.1)'};
    transition:  ${props => props.theme.transition};
    ${props => props.responsive && css`
        ${props => props.responsive.large && css`
            @media ${device.large}{
                padding: ${props => props.responsive.large.p || '31px 20px 31px'};
            }
        `}
    `}
    ${props => !props.responsive && css`
        @media ${device.large}{
            padding: 31px 20px 31px;
        }
    `}
`;

export const TestimonialInfo = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: ${props => props.mb || '22px'};
    @media ${device.xsmall}{
        justify-content: center;
    }
`;

export const TestimonialMedia = styled.div`
    margin-right: ${props => props.mr || '30px'};
    flex-shrink: 0;
    img{
        border-radius: ${props => props.circle && '50%'};
    }
    @media ${device.xsmall}{
        margin-right: 0;
        margin-bottom: 20px;
    }
`;

export const TestimonialAuthor = styled.div`
    flex-grow: 1;
    @media ${device.xsmall}{
        text-align: center;
    }
`;

export const TestimonialRating = styled.div`
    margin-bottom: 10px;
    .rating{
        font-size: 16px;
        color: ${props => props.theme.colors.yellow};
        &.disable{
            color: ${props => props.theme.colors.silver};
        }
    }
`;

export const AuthorInfo = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    @media ${device.xsmall}{
        text-align: center;
        justify-content: center;
    }
`;

export const AuthorName = styled.h6`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
`;

export const AuthorRole = styled.span`
    font-size: 14px;
    &:before{
        content: ' / ';
        padding: 0 5px;
    }
`;

export const Review = styled.div`
    font-size: ${props => props.fontSize || '18px'};
`;