import styled from "styled-components";

export const BoxImageInner = styled.div`
    height: 100%;
    position: relative;
    display: flex;
`;

export const BoxImageSrcWrap = styled.div`
    flex-shrink: 0;
    margin-right: 24px;
`;

export const BoxImageContent = styled.div`
    flex-grow: 1;
`;

export const Image = styled.div`

`;

export const Heading = styled.h6`
    font-weight: 500;
    line-height: 1.25;
    margin-bottom: 12px;
`;

export const Text = styled.div`
    color: #696969;
`;

export const BoxImageWrap = styled.div`
    transition: ${props => props.theme.transition};
    ${BoxImageInner}{
        margin-top: ${props => props.mt}
    }
`;
