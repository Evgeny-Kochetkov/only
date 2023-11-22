import {
    useState,
    useCallback,
    useMemo,
    useEffect
} from 'react'

import { SlowNum } from '@/components/ui/slowNum'

import {
    SCMainCircle,
    SCWrap,
    SCItem,
    SCCircle,
    SCDot,
    SCText,
    SCYear
} from './style'

import { IHistoricalDatesDate } from '@/types/historicalDatesDateType'
import { SetStateAction } from 'react'

export const MainCircle = (
    {
        historicalDates,
        activeCategory,
        setActiveCategory,
        angleOffset,
        setAngleOffset,
        animateAngleOffset,
        prevAngleOffset,
        setPrevAngleOffset
    }: { 
        historicalDates: IHistoricalDatesDate[]; 
        activeCategory: number; 
        setActiveCategory: React.Dispatch<SetStateAction<number>>;
        angleOffset: number;
        setAngleOffset: React.Dispatch<SetStateAction<number>>;
        prevAngleOffset: number
        setPrevAngleOffset: React.Dispatch<SetStateAction<number>>;
        animateAngleOffset: (newAngleOffset: number) => void;
    }) => {

    const NUM_DOTS = historicalDates.length
    const GAP = 360/NUM_DOTS
    const RADIUS = 265
    const ITEM_SIZE = 56

    /* const [activeCategory, setActiveCategory] = useState<number>(NUM_DOTS) */
    
    const [minYearNum, maxYearNum] = useMemo(() => {
        const years = historicalDates[activeCategory - 1].items.map(({ date }) => new Date(date).getFullYear())
        const minYearNum = years.reduce((min, year) => (year < min ? year : min))
        const maxYearNum = years.reduce((max, year) => (year > max ? year : max))
        return [minYearNum, maxYearNum]
    }, [activeCategory])

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLElement
        const dataNumber = target.getAttribute('data-number')
        if (dataNumber) {
            setActiveCategory(parseInt(dataNumber))
            /* setAngleOffset(-parseInt(dataNumber) * GAP) */
            setPrevAngleOffset(-parseInt(dataNumber) * GAP)
            animateAngleOffset(-parseInt(dataNumber) * GAP)
        }
    }

    const getDotPosition = useCallback((angle: number) => {
        const radians = (angle + angleOffset) * (Math.PI / 180)
        const x = RADIUS * Math.cos(radians)
        const y = RADIUS * Math.sin(radians)
        return [x, y]
    }, [angleOffset])

    return (
        <SCMainCircle>
            <SCWrap>
                <SCCircle
                    radius={RADIUS}
                    onClick={handleClick}
                >
                    {historicalDates.map(({id, text}, i) => {
                        const angle = (360 / NUM_DOTS) * i
                        const [x, y] = getDotPosition(angle)
                        const style = {
                            top: `${Math.round(y + RADIUS - ITEM_SIZE / 2)}px`,
                            left: `${Math.round(x + RADIUS - ITEM_SIZE / 2)}px`,
                        }
                        return (
                            <SCItem
                                key={id}
                                style={style}
                                size={ITEM_SIZE}
                                className={activeCategory === i + 1 ? 'active': undefined}
                                data-number={i+1}
                            >
                                <SCDot>
                                    {i + 1}
                                </SCDot>
                                <SCText>
                                    {text}
                                </SCText>
                            </SCItem>
                        )
                    })}
                </SCCircle>
                <SCYear>
                    <SlowNum id={1} num={minYearNum}/>
                    &nbsp;&nbsp;
                    <SlowNum id={2} num={maxYearNum}/>
                </SCYear>
            </SCWrap>
        </SCMainCircle>
    )
}