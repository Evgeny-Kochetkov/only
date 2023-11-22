import styled, { keyframes, css } from 'styled-components'

import { theme } from '@/theme'

export const SCYear = styled.span<{opacity: boolean}>`
    font-size: 25px;
    line-height: 120%;
    color: ${theme.colors.blue};

    @media (${theme.device.mobileL}) {
        font-size: 16px;
        opacity: ${({opacity}) => opacity ? 0.5 : 1};
    }
`

export const SCDescription = styled.p<{opacity: boolean}>`
    font-size: 20px;
    line-height: 30px;
    color: ${theme.colors.blackBlue};
    max-width: 320px;

    @media (${theme.device.mobileL}) {
        font-size: 14px;
        line-height: 145%;
        opacity: ${({opacity}) => opacity ? 0.5 : 1};
    }
`

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const SCSliderwrap = styled.div`
    position: relative;
    /* margin-top: 56px; */
    max-width: 1440px;
    padding: 0 80px;
    grid-area: slider;
    min-height: 135px;
    
    opacity: 0;
    animation-name: ${fadeIn};
    animation-duration: 0.5s;
    animation-fill-mode: forwards;

    @media (${theme.device.mobileL}) {
        padding: 0 20px;
        &::before {
            content: '';
            position: absolute;
            top: -20px;
            left: 50%;
            transform: translateX(-50%);
            width: calc(100% - 40px);
            height: 1px;
            background: #C7CDD9;
        }
    }
`

export const SCButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background: #FFF;
    border-radius: 100%;
    z-index: 1;

    @media (${theme.device.mobileL}) {
        display: none;
    }
`