import styled from 'styled-components'

import { theme } from '@/theme'

export const SCSection = styled.section`
    position: relative;
    display: grid;
    grid-template: 170px 134px 393px 135px 56px 135px / 100%;
    grid-template-areas:
    '.'
    'title'
    '.'
    'pagination'
    '.'
    'slider';
    width: 100%;
    /* height: 100%; */
    max-width: 1440px;
    /* max- */min-height: 1080px;
    /* padding-top: 170px; */

    @media (${theme.device.mobileL}) {
        grid-template: 59px 48px 186px 134px 78px 135px / 100%;
        grid-template-areas:
        '.'
        'title'
        '.'
        'slider'
        '.'
        'pagination';
        min-height: 568px;
    }
`

export const SCPagination = styled.div`
    display: flex;
    flex-direction: column;
    /* margin-top: 393px; */
    max-width: 200px;
    padding-left: 80px;
    top: 0;
    transform-style: preserve-3d;
    transform: translateZ(2px);
    grid-area: pagination;

    @media (${theme.device.mobileL}) {
        padding-left: 20px;
        max-width: 80px;
    }
`

export const SCActiveSlide = styled.p`
    font-size: 14px;
`

export const SCBtnwrap = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 20px;

    @media (${theme.device.mobileL}) {
        margin-top: 10px;
        gap: 10px;
    }
`

export const SCBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 1px solid rgba(48, 62, 88, 0.5);
    transition: all 0.3s ease-out;

    &.inactive {
        opacity: 0.5;
        cursor: auto;
    }

    @media (${theme.device.mobileL}) {
        width: 25px;
        height: 25px;
        >svg{
            width: 6.25px;
            height: 6.25px;
        }
    }
`