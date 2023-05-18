import React from 'react';
import Window from "./Window"

function VirtualizationWIthInfiniteScrollingImageLazyLoading({ data, rowHeight }) {
  return (
    <Window key="with-image" rowHeight={rowHeight}
    >
      {
        data
          .map((it, index) => {
            return <li key={index} className='row'>
              <Item item={it} />
            </li>
          })
      }
    </Window>
  )
}

const Item = ({ item }) => {
  return (
    <div className="item" >
      <a href={`/${item.code}`} key={item.code} className="item-container" >
        <div style={{ height: "100px", display: "flex" }}>
          <img style={{ width: "auto", height: "80%" }} src="https://i.ibb.co/nbvWJW9/image-placeholder-for-lazy-loading.png" data-src={item.image} alt={item.name} className="item-image" />
          <p className="item-title">{item.name}</p>
        </div>
      </a>
    </div>
  )
}
export default VirtualizationWIthInfiniteScrollingImageLazyLoading;