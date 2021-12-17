import { useRef } from "react"

export default function useDebounce(fn, delay){
    
    const timeoutRef = useRef(null)

    function deboncedFn(...args){
        window.clearInterval(timeoutRef.current)
        timeoutRef.current = window.setInterval(() => {
           fn(...args) 
        }, delay)
    }

    return deboncedFn
}