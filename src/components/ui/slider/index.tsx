import {
    useState,
    useCallback,
    useEffect
} from 'react'

import { Swiper as SwiperClass } from 'swiper/types'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Bebas_Neue } from 'next/font/google'

import 'swiper/css'

import {
    SCYear,
    SCDescription,
    SCSliderwrap,
    SCButton
} from './style'

import { ICateroryItem } from '@/types/historicalDatesDateType'

const bebas_neue = Bebas_Neue({ weight: ['400'], subsets: ['latin'] })

export const Slider = ({ items }: { items: ICateroryItem[]; }) => {

    const [slide, setSlide] = useState(0)
    const [swiperRef, setSwiperRef] = useState<SwiperClass>()
    const [slidesPerView, setSlidesPerView] = useState(3)

    useEffect(() => {
        const updateSlidesPerView = () => {
            setSlidesPerView(window.innerWidth >= 768 ? 3 : 1.6)
        }
    
        updateSlidesPerView()
        window.addEventListener('resize', updateSlidesPerView)
    
        return () => {
            window.removeEventListener('resize', updateSlidesPerView)
        }
    }, [])

    const handleSlideChange = useCallback((swiper: any) => {
        setSlide(swiper.realIndex)
    }, [])

    const handlePrevious = useCallback(() => {
        swiperRef?.slidePrev()
    }, [swiperRef])

    const handleNext = useCallback(() => {
        swiperRef?.slideNext()
    }, [swiperRef])

    return (
        <SCSliderwrap>
            <Swiper
                spaceBetween={50}
                slidesPerView={slidesPerView}
                onSwiper={setSwiperRef}
                onSlideChange={handleSlideChange}
                style={{
                    'position': 'relative'
                }}
            >
                {items.map(({id, date, description}, i) => (
                    <SwiperSlide
                        key={id}
                        style={{
                            'display': 'flex',
                            'flexDirection': 'column',
                            'gap': '15px'
                        }}
                    >
                        <SCYear className={`${bebas_neue.className}`} opacity={i !== slide}>
                            {new Date(date).getFullYear()}
                        </SCYear>
                        <SCDescription opacity={i !== slide}>
                            {description}
                        </SCDescription>
                    </SwiperSlide>
                ))}
                {/* {window.innerWidth >= 768 ? null : <SwiperSlide/>} */}
            </Swiper>
            <SCButton
                onClick={handlePrevious}
                style={{
                    'left': '20px',
                    'visibility': !slide ? 'hidden' : 'visible'
                }}
                className='swiper-button-prev'
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
                    <path d="M7 1L2 6L7 11" stroke="#3877EE" strokeWidth="2"/>
                </svg>
            </SCButton>
            <SCButton
                onClick={handleNext}
                style={{
                    'right': '20px',
                    'visibility': slide && slide >= (items.length - 3) ? 'hidden' : 'visible'
                }}
                className='swiper-button-next'
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
                    <path d="M3 1L8 6L3 11" stroke="#3877EE" strokeWidth="2"/>
                </svg>
            </SCButton>
        </SCSliderwrap>
    )
}