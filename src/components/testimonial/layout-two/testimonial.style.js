import styled from "styled-components";

export const TestimonialWrap = styled.div`
    background: ${props => props.bgColor};
    padding: ${props => props.p};
    border-radius: ${props => props.borderRadius};
    transition: ${props => props.theme.transition};
`;

export const TestimonialSubject = styled.h6`
    margin-bottom: ${props => props.mb};
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
`;

export const TestimonialReview = styled.div`
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
`;

export const AuthorInfoWrap = styled.div`
    display: flex;
    align-items: center;
    margin-top: ${props => props.mt};
`;

export const AuthorMedia = styled.div`
    flex-shrink: 0;
    margin-right: ${props => props.mr};
    img{
        border-radius: ${props => props.circle && '50%'}
    }
`;

export const AuthorInfo = styled.div`
    flex-grow: 1;
`;

export const AuthorName = styled.h6`
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
`;

export const AuthorRole = styled.span`
    display: block;
    font-size: 14px;
    &:before{
        content: ' / ';
        padding: 0 5px;
    }
`;