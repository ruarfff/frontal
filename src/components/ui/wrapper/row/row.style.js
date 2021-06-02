import styled, { css } from "styled-components";
import { Row } from "react-bootstrap";
import { device } from "@theme";

export const Rowwrap = styled(Row)`
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    padding-top: ${props => props.pt};
    padding-bottom: ${props => props.pb};
    text-align: ${props => props.textalign};
    justify-content: ${props => props.justify};
    align-items: ${props => props.alignitems};

    ${props => props.gutters && css`
        ${props => props.gutters.xl && css`
            @media ${device.xlargeOnly}{
                margin-right: ${$props => (props.gutters.xl / 2) * -1}px;
                margin-left: ${$props => (props.gutters.xl / 2) * -1}px;
                & > [class*="col"]{
                    padding-right: ${$props => (props.gutters.xl / 2)}px;
                    padding-left: ${$props => (props.gutters.xl / 2)}px;
                }
            }
        `}
        ${props => props.gutters.lg && css`
            @media ${device.largeOnly}{
                margin-right: ${$props => (props.gutters.lg / 2) * -1}px;
                margin-left: ${$props => (props.gutters.lg / 2) * -1}px;
                & > [class*="col"]{
                    padding-right: ${$props => (props.gutters.lg / 2)}px;
                    padding-left: ${$props => (props.gutters.lg / 2)}px;
                }
            }
        `}
    `}
`;