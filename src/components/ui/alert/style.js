import styled from "styled-components";
import Alert from "react-bootstrap/Alert";
import { device } from "@theme";

export const AlertWrap = styled(Alert)`
    margin-bottom: ${props => props.mb};
    padding: 27px 30px 27px 50px;
    font-weight: 500;
    border-radius: 5px;
    @media ${device.medium}{
        padding: 22px 25px 22px 40px;
    }
    .icon{
        margin-right: 10px;
    }
`;