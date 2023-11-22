import styled, { css } from 'styled-components'

import { theme } from '@/theme'

export const SCMainCircle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* max-height: 1080px; */
    border-left: 1px solid rgba(66, 86, 122, 0.2);
    border-right: 1px solid rgba(66, 86, 122, 0.2);
    /* user-select: none; */
    
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        height: 1px;
        width: 100%;
        background: rgba(66, 86, 122, 0.2);
        z-index: -1;
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 100%;
        width: 1px;
        background: rgba(66, 86, 122, 0.2);
        z-index: -1;
    }

    @media (${theme.device.mobileL}) {
        /* display: none; */
        &::before {
            display: none;
        }
        
        &::after {
            display: none;
        }
    }
`

export const SCWrap = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

export const SCCircle = styled.div<{ radius: number; }>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    max-height: ${({radius}) => `${radius * 2}px`};
    max-width: ${({radius}) => `${radius * 2}px`};
    border-radius: 100%;
    border: 1px solid rgba(66, 86, 122, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;

    @media (${theme.device.mobileL}) {
        display: none;
    }
`

const active = css<{ size: number; }>`
    >span {
        width: ${({size}) => `${size}px`};
        height: ${({size}) => `${size}px`};
        background-color:  ${theme.colors.white};
        border: 1px solid rgba(48, 62, 88, 0.5);
    }
    >p {
        opacity: 1;
    }
`

export const SCItem = styled.button<{ size: number; }>`
    position: absolute;
    width: ${({size}) => `${size}px`};
    height: ${({size}) => `${size}px`};
    border-radius: 100%;
    transform-origin: center center;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        ${active}
    }

    &.active {
        ${active}
    }
`

export const SCDot = styled.span`
    background-color: ${theme.colors.blackBlue};
    color: ${theme.colors.blackBlue}; 
    border-radius: 100%;
    width: 6px;
    height: 6px;
    transition: all 0.3s ease-out;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

export const SCText = styled.p`
    opacity: 0;
    position: absolute;
    left: 110%;
    transition: all 0.3s ease-out;
    font-size: 20px;
    font-weight: 700;
    color: ${theme.colors.blackBlue};
`

export const SCYear = styled.p`
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 200px;
    font-weight: 700;

    >*{
        &:nth-child(1) {
            color: ${theme.colors.blue};
        }

        &:nth-child(2) {
            color: ${theme.colors.pink};
        }
    }

    @media (${theme.device.mobileL}) {
        top: 163px;
        transform: translate(-50%, 0);
        font-size: 56px;
    }
`

