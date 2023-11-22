import {
    useState,
    useCallback,
    useMemo,
    useEffect
} from 'react'

import { MainTitle } from '@/components/ui/mainTitle'
import { MainCircle } from '../mainCircle'

import { Slider } from '@/components/ui/slider'

import {
    SCSection,
    SCPagination,
    SCActiveSlide,
    SCBtnwrap,
    SCBtn
} from './style'

import { IHistoricalDatesDate } from '@/types/historicalDatesDateType'

export const HistoricalDates = ({ historicalDates }: { historicalDates: IHistoricalDatesDate[]; }) => {

    const [activeCategory, setActiveCategory] = useState<number>(historicalDates.length)
    const [angleOffset, setAngleOffset] = useState<number>(0)
    const [prevAngleOffset, setPrevAngleOffset] = useState<number>(0)
    
    const nextSlide = () => {
        if (activeCategory < historicalDates.length) {
            setActiveCategory((prevState) => prevState + 1)
            const newAngleOffset = angleOffset - (360 / historicalDates.length)
            const newPrevAngleOffset = prevAngleOffset - (360 / historicalDates.length)
            setAngleOffset(newAngleOffset);
            setPrevAngleOffset(newPrevAngleOffset > 360 ? 0 : newPrevAngleOffset)
            animateAngleOffset(newAngleOffset)
        }
    }
    const prevSlide = () => {
        if (activeCategory > 1) {
            setActiveCategory((prevState) => prevState - 1)
            const newPrevAngleOffset = prevAngleOffset + (360 / historicalDates.length)
            setPrevAngleOffset(newPrevAngleOffset > 360 ? 0 : newPrevAngleOffset)
            animateAngleOffset(newPrevAngleOffset)
        }
    }

    const animateAngleOffset = /* useCallback( */(newAngleOffset: number) => {
        const duration = 1000
        const startAngleOffset = angleOffset
        let startTime: null | number = null
      
        const step = (timestamp: number) => {
            if (!startTime) {
                startTime = timestamp
            }
      
            const deltaTime = timestamp - startTime
            const progress = Math.min(deltaTime / duration, 1)
            const easedProgress = ease(progress)
            const currentAngleOffset = startAngleOffset + (newAngleOffset - startAngleOffset) * easedProgress
      
            setAngleOffset(currentAngleOffset)
      
            if (progress < 1) {
                requestAnimationFrame(step)
            }
        }
      
        requestAnimationFrame(step)
    }/* , []) */

    const ease = /* useCallback( */(progress: number) => {
        return progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress
    }/* , []) */

    return (
        <SCSection>
            <MainTitle text='Исторические даты'/>
            <MainCircle
                historicalDates={historicalDates}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                angleOffset={angleOffset}
                setAngleOffset={setAngleOffset}
                animateAngleOffset={animateAngleOffset}
                prevAngleOffset={prevAngleOffset}
                setPrevAngleOffset={setPrevAngleOffset}
            />
            <SCPagination>
                <SCActiveSlide>
                    <span>
                        {activeCategory < 10 ? `0${activeCategory}` : activeCategory}
                    </span>
                    /
                    <span>
                        {historicalDates.length < 10 ? `0${historicalDates.length}` : historicalDates.length}
                    </span>
                </SCActiveSlide>
                <SCBtnwrap>
                    <SCBtn
                        onClick={prevSlide}
                        className={!(activeCategory - 1) ? 'inactive' : undefined}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15" fill="none">
                            <path d="M9.25 1.5L3 7.75L9.25 14" stroke="#42567A" strokeWidth="2"/>
                        </svg>
                    </SCBtn>
                    <SCBtn
                        onClick={nextSlide}
                        className={activeCategory === historicalDates.length ? 'inactive' : undefined}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15" fill="none">
                            <path d="M2.75 1.5L9 7.75L2.75 14" stroke="#42567A" strokeWidth="2"/>
                        </svg>
                    </SCBtn>
                </SCBtnwrap>
            </SCPagination>
            <Slider items={historicalDates[activeCategory - 1].items}/>
        </SCSection>
    )
}