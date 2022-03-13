import React,{useRef ,useEffect} from 'react'
import './cursor.scss'
function CustomCursor() {
    const cursorRef = useRef(null)
    useEffect(() => {
      document.addEventListener('mousemove' ,(event) => {
            const {clientX , clientY} = event
            const mouseX = clientX - cursorRef.current.clientWidth / 2;
            const mouseY = clientY - cursorRef.current.clientHeight / 2;
            console.log(mouseX ,mouseY)
            cursorRef.current.style.tranform = `translate3d(${mouseX}px ,${mouseY}px ,0)`; 
      })
    }, [])
    
  return (
    <div className="cursor" ref={cursorRef}></div>
  )
}

export default CustomCursor;