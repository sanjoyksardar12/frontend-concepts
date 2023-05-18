import React, { useState, useMemo, useEffect ,useRef} from "react";
import useElementSize from "../hooks/useElementSize";
import "./Window.css";

const config = {
  threshold: 1,

}

const Window = ({ rowHeight, children, gap = 10, dataFetcher }) => {
  const [containerRef, ref, { height: containerHeight, width: containerWidth }, ] = useElementSize();
  const [scrollPosition, setScrollPosition] = useState(0);

  const indexRef  = useRef({start: 0, end : 0})

  const bufferedItem = 2;

  const loadImage = (target)=>{
    target.src = target.dataset.src;
  }

  useEffect(() => {
    const observer = new IntersectionObserver(function (entries, self) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          loadImage(entry.target);
          self.unobserve(entry.target);
        }
      })
    }, config)
    console.log(ref?.current)

    const images = ref?.querySelectorAll("img") || [];
    images.forEach((lazyImage)=>{
      observer.observe(lazyImage);
    })


    const scrollingObserver = new IntersectionObserver(function ([entry], self) {
      if (entry.isIntersecting){
        if(indexRef.endIndex === children.length - 1){
          console.log("calling data fetcher............")
          dataFetcher()
        }
      }
    })

    const lastChild = ref?.querySelector("li:lastChild");
    observer.observe(lastChild)


    

  }, [ref, scrollPosition]);

  // console.log("containerHeight", containerHeight)
  const startIndex = Math.max(Math.floor(scrollPosition / rowHeight) - bufferedItem, 0)
  const endIndex = Math.min(Math.ceil((scrollPosition + containerHeight) / rowHeight) + bufferedItem, children.length - 1);

  indexRef.current = {
    startIndex,
    endIndex
  }
  // console.log("startindex endIndex", startIndex, endIndex);
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
      ref={containerRef}
      onScroll={onScroll}
      style={{
        overflowY: "scroll",
        position: "relative"
      }}
     
      className="content-container"
    >
      {visibleChildren}
    </ul>
  )
}


export default Window;