import styled from "styled-components";
import { device } from "@theme";

export const FooterWrap = styled.footer``;

export const FooterInner = styled.div`
	background-size: cover;
	background-repeat: no-repeat;
    padding-top: 120px;
    padding-bottom: 120px;
    @media ${device.medium}{
        padding-top: 80px;
        padding-bottom: 80px;
    }
    @media ${device.small}{
        padding-top: 60px;
        padding-bottom: 60px;
    }
`;

export const FooterContent = styled.div`
    padding-top: 70px;
    padding-bottom: 70px;
    text-align: center;
    @media ${device.medium}{
        padding-top: 40px;
        padding-bottom: 40px;
    }
    @media ${device.small}{
        padding-top: 30px;
        padding-bottom: 30px;
    }
`;

export const ButtonWrap = styled.div`
    margin-top: 40px;
`;