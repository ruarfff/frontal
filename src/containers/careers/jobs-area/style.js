import styled, { css } from "styled-components";
import { device } from "@theme";

export const SectionWrap = styled.section`
    padding-top: 89px;
    padding-bottom: 89px;
    @media ${device.medium}{
        padding-top: 72px;
        padding-bottom: 72px;
    }
    @media ${device.small}{
        padding-top: 53px;
        padding-bottom: 53px;
    }
`;

export const JobList = styled.div``;

export const JobItem = styled.div`
    border-radius: 5px;
    padding: 33px 50px 36px;
    @media ${device.small}{
        padding: 20px 30px 20px;
    }
    ${props => !props.isEven && css`
        background: #f6f2ed;
    `}
`;

export const JobTitle = styled.h5``;

export const JobType = styled.p`
    font-size: 18px;
    margin-top: 12px;
    display: block;
    @media ${device.medium}{
        margin-bottom: 10px;
    }
`;

export const JobDesc = styled.p``;

export const JobButton = styled.div`
    text-align: center;
    @media ${device.medium}{
        text-align: left;
        margin-top: 20px;
    }
`;