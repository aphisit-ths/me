import React, { useRef, useEffect } from "react";
import "./cursor.scss";
function CustomCursor() {
  const mainCursor = useRef(null);
  const secondaryCursor = useRef(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    desinationX: 0,
    desinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });
  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;

      const mouseX = clientX;
      const mouseY = clientY;

      positionRef.current.mouseX =
        mouseX - secondaryCursor.current.clientWidth / 2;
      positionRef.current.mouseY =
        mouseY - secondaryCursor.current.clientHeight / 2;
      mainCursor.current.style.transform = `translate3d(${
        mouseX - mainCursor.current.clientWidth / 2
      }px, ${mouseY - mainCursor.current.clientHeight / 2}px, 0)`;
    });
  }, []);

  useEffect(() => {
    const folllowMouse = () => {
      positionRef.current.key = requestAnimationFrame(folllowMouse);

      const { desinationX, desinationY, distanceX, distanceY, mouseX, mouseY } =
        positionRef.current;

      if (!desinationX | !desinationY) {
        positionRef.current.desinationX = mouseX;
        positionRef.current.desinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - desinationX) * 0.05;
        positionRef.current.distanceY = (mouseY - desinationY) * 0.05;
        if (
          Math.abs(
            positionRef.current.distanceX +
              Math.abs(positionRef.current.distanceY) <
              0.6
          )
        ) {
          positionRef.current.desinationX = mouseX;
          positionRef.current.desinationY = mouseY;
        } else {
          positionRef.current.desinationX += distanceX;
          positionRef.current.desinationY += distanceY;
        }
      }
      secondaryCursor.current.style.transform = `translate3d(${desinationX}px ,${desinationY}px ,0)`;
    };
    folllowMouse();
  }, []);

  return (
    <>
      <div className="secondary-cursor" ref={secondaryCursor}></div>
    </>
  );
}

export default CustomCursor;
