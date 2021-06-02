import styled from "styled-components";

export const FormWrap = styled.form`
    position: relative;
    .form-output{
        margin-top: 10px;
        &.success{
            color: green;
        }
        &.errorMsg{
            color: red;
        }
    }
`;