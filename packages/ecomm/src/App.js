import logo from './logo.svg';
// import { FooterCopy} from "footer-copy";
import { Footer } from "footer";
import { FooterCopy} from "testingssss"
import Window from "./custom-virtualization/Window"
import './App.css';

function App() {
  return (
    <div className="App">
      <Footer/>
      <FooterCopy/>
      <Window rowHeight={60}
      >
        {
          new Array(10000)
          .fill({})
          .map((_, index)=>({id: index}))
          .map((it)=>{
            return <li key={it.id} className='row'>
              {it.id}
            </li>
          })
        }
      </Window>
    </div>
  );
}

export default App;
