import styled, { css } from "styled-components";

export const Input = styled.input`
    width: 100%;
    min-height: ${props => props.height || '56px'};
    color: ${props => props.color || props.theme.colors.textColor} !important;
    background-color: ${props => props.bgcolor || '#f8f8f8'};
    font-size: ${props => props.fontsize || '15px'};
    font-weight: ${props => props.fontweight || 400};
    border-width: ${props => props.borderwidth || '1px'};
    border-color: ${props => props.bordercolor || '#f8f8f8'};
    border-style: solid;
    border-top-color: ${props => props.bordertopcolor};
    border-right-color: ${props => props.borderrightcolor};
    border-bottom-color: ${props => props.borderbottomcolor};
    border-left-color: ${props => props.borderleftcolor};
    border-radius: ${props => props.borderradius || '5px'};
    padding-left: ${props => props.pl || '20px'};
    padding-right: ${props => props.pr || '20px'};
    padding-top: ${props => props.pt || 0};
    padding-bottom: ${props => props.pb || 0};
    
    &::placeholder,
    &::-webkit-input-placeholder {
        color: ${props => props.color || props.theme.colors.textColor} !important;
    }
    &:-ms-input-placeholder {
        color: ${props => props.color || props.theme.colors.textColor} !important;
    }
    ${props => props.hover === 'false' && css`
        &:focus,
        &:hover{
            color: ${props => props.color} !important;
            background-color: ${props => props.bgcolor} !important;
            outline: none;
            border-color: transparent !important;
        }
    `}
    &:focus{
        color: ${props => props.color || props.theme.colors.textColor} !important;
        ::placeholder,
        ::-webkit-input-placeholder {
            color: ${props => props.color || props.theme.colors.textColor} !important;
        }
        :-ms-input-placeholder {
            color: ${props => props.color || props.theme.colors.textColor} !important;
        }
    }
    ${props => props.hover === '2' && css`
        &:hover,
        &:focus {
            color: #222 !important;
            border-color: transparent !important;
            background: #fff;
            box-shadow: 0 0 40px rgba(51,51,51,0.1);
        }
    `}
`;