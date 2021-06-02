import styled from "styled-components";

export const BoxIconInner = styled.div`
    padding: 36px 10px 26px;
    border-radius: 5px;
    background: #fff;
    border: 2px solid #eee;
    transition: all 0.7s cubic-bezier(0.645, 0.045, 0.355, 1);
    text-align: center;
    margin-top: ${props => props.mt};
`;

export const BoxIconImg = styled.div`
    height: 65px;
    text-align: center;
    width: 65px;
    margin: auto;
    margin-bottom: 29px;
    color: #086AD8;
    svg * {
        stroke: #086AD8;
    }
    i{
        color: #086AD8;
    }
`;

export const BoxIconContent = styled.div`
    text-align: center;
`;

export const BoxIcontitle = styled.h5`
    font-weight: 500;
    line-height: 1.25;
    margin-bottom: 12px;
`;

export const BoxIconText = styled.p`
    margin-bottom: 0;
`;

export const BoxIconBtn = styled.div`
    margin-top: 20px;
`;

export const BoxIconWrap = styled.div`
    &:hover{
        ${BoxIconInner}{
            border-color: #fff;
            transform: translateY(-5px);
            background: #fff;
            box-shadow: 0 0 40px rgba(51,51,51,0.1);
        }
    }
`;