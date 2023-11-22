import React, { useState, useEffect, useCallback } from 'react';

export const SlowNum = ({ id, num }: { id: number; num: number }) => {
    const [prevNum, setPrevNum] = useState(num)

    const outNum = useCallback((num: number, elem: string, step: number, time: number) => {
        const l = document.querySelector('#' + elem)
        let n = parseInt(l?.innerHTML || '0', 10)
        let t = Math.round(time / Math.abs(num - n))
        const increment = num > n ? step : -step
        
        let interval = setInterval(() => {
            n += increment
            if (increment > 0 ? n >= num : n <= num) {
                n = num
                clearInterval(interval)
            }

            if (l) {
                l.innerHTML = n.toString()
            }
        }, t)
    }, [])

    useEffect(() => {
        outNum(num, `out-${id}`, 1, 1000)
    }, [num])

    return (
        <span id={`out-${id}`}>
            {prevNum}
        </span>
    )
}