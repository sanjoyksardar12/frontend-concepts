import React, { useState, useMemo } from "react";
import useElementSize from "../hooks/useElementSize";
import "./Window.css";

const Window = ({ rowHeight, children, gap = 10, }) => {
  const [containerRef, { height: containerHeight, width: containerWidth }] = useElementSize();
  const [scrollPosition, setScrollPosition] = useState(0);

  const bufferedItem = 2;

  // console.log("containerHeight--", containerHeight)
  const startIndex = Math.max(Math.floor(scrollPosition / rowHeight) - bufferedItem, 0)
  const endIndex = Math.min(Math.ceil((scrollPosition + containerHeight) / rowHeight) + bufferedItem, children.length - 1)

  console.log("startindex endIndex", startIndex, endIndex);
  const visibleChildren = children.slice(startIndex, endIndex)
    .map((child, index) => {
      return React.cloneElement(child, {
        style: {
          position: "absolute",
          top: (startIndex + index) * rowHeight + index * gap,
          height: rowHeight,
          left: 0,
          right: 0,
          lineHeight: `${rowHeight}px`
        }
      })
    });

  const onScroll = (event) => {
    // throttle((event)=>set)
    setScrollPosition(event.target.scrollTop)
  }

  // console.log("containerWidth-", containerWidth);
  // console.log("containerHeight-", containerHeight);
  // console.log("containerRef", containerRef)
  return (
    <ul
      onScroll={onScroll}
      style={{
        overflowY: "scroll",
        position: "relative"
      }}
      ref={containerRef}
      className="container"
    >
      {visibleChildren}
    </ul>
  )
}


export default Window;