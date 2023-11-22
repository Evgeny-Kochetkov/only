import styled from 'styled-components'

import { theme } from '@/theme'

export const SCMainTitle = styled.h1`
    position: relative;
    font-size: 56px;
    font-weight: 700;
    line-height: 120%;
    max-width: 433px;
    padding-left: 80px;
    color: ${theme.colors.blackBlue};
    grid-area: title;
    /* transform-style: preserve-3d;
    transform: translateZ(1px); */

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 5px;
        background: linear-gradient(rgba(56, 119, 238, 1), rgba(239, 93, 168, 1));
    }

    @media (${theme.device.mobileL}) {
        font-size: 20px;
        max-width: 123px;
        padding-left: 20px;

        &::before {
            display: none;
        }
    }
`