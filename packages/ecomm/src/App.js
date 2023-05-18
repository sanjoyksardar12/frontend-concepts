import { Footer } from "footer";
import { FooterCopy } from "testingssss"
import Window from "./custom-virtualization/Window"
import VirtualizationWithImageLAzyLoading from './custom-virtualization/VirtualizationWithImageLAzyLoading';
import './App.css';
import { RouterProvider } from "react-router-dom";

import routes from "./router/index";

import data from "./custom-virtualization/data"

function App() {
  return (
    <div className="App">
      <Footer />
      <FooterCopy />
      
      <RouterProvider router={routes}/>
      {/* virtualization with infinite scrolling  */}
      {/* use normal virtualization */}
      {/* <Window key="normal" rowHeight={60}
      >
        {
          new Array(10000)
            .fill({})
            .map((_, index) => ({ id: index }))
            .map((it) => {
              return <li key={it.id} className='row'>
                {it.id}
              </li>
            })
        }
      </Window> */}

      {/* virtualization with image lazyLoading */}
      {/* <VirtualizationWithImageLAzyLoading data={data} rowHeight={100}/>  */}
    </div>
  );
}

export default App;
