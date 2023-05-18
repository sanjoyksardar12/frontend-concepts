import { Outlet} from "react-router-dom"
import SideBar from "../../components/sidebar";
import "./root.css";

function Root({ children }) {
  return (
    <div className="main">
    <SideBar/>
    <div className="container">
      <p>Root Content:</p>
     <Outlet/>
    </div>
    </div>
  )
}


export default Root;