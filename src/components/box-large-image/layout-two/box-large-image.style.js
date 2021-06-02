import styled from "styled-components";
import Anchor from "@ui/anchor";
import Heading from "@ui/heading";
import Text from "@ui/text";

export const BoxLargeImgInner = styled.div`
    background: #fff;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 0 40px rgba(51,51,51,0.1);
    position: relative;
    height: 100%;
`;

export const BoxLargeImgMedia = styled.div`
    position: relative;
    img{
        width: 100%;
    }
`;

export const BoxLargeImgContent = styled.div`
    padding-top: ${props => props.pt || '32px'};
    padding-left: ${props => props.pt || '35px'};
    padding-right: ${props => props.pt || '35px'};
    padding-bottom: ${props => props.pb || '88px'};
    text-align: ${props => props.textalign || 'center'};
`;

export const HeadingWrap = styled(Heading)`
    font-weight: ${props => props.fontweight || 500};
    line-height: ${props => props.lineHeight || 1.25};
    margin-bottom: ${props => props.mb || '12px'};
`;

export const CategoryWrap = styled(Text)`
    color: ${props => props.color || props.theme.colors.themeColor};
    margin-bottom: 2px;
`;

export const TextWrap = styled(Text)`
    color: ${props => props.color || '#696969'};
    margin-bottom: ${props => props.mb};
    margin-top: ${props => props.mt};
`;

export const BoxLargeImgBtnWrap = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    height: 56px;
    line-height: 55px;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    border-top: 1px solid #eee;
    color: #086AD8;
    &:before{
        background-color: #086AD8;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transform: translateY(100%);
        transition: ${props => props.theme.transition};
        z-index: -1;
    }
`;

export const BoxLargeImgLink = styled(Anchor)`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
    opacity: 0;
    text-indent: -99999px;
`;

export const BoxLargeImgWrap = styled.div`
    transition: ${props => props.theme.transition};
    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
    margin-left: ${props => props.ml};
    margin-right: ${props => props.mr};
    height: 100%;
    &:hover{
        transform: translateY(-5px);
        h5{
            color: ${props => props.theme.colors.themeColor};
        }
        ${BoxLargeImgLink}{
            visibility: visible;
            opacity: 1;
        }
        ${BoxLargeImgBtnWrap}{
            &:before{
                transform: translateY(0);
            }
            a{
                color: #fff;
            }
        }
    }
`;