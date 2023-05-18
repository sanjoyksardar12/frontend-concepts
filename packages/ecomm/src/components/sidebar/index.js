// @credit https://github.com/0shuvo0/react-sidebar

import { useState } from "react";
import { Link } from "react-router-dom"

import RouterConfig from "../../router/config"
import "./sidebar.css";

function SideBarItem({ item, basePath = "/" }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={open ? "sidebar-item open" : "sidebar-item "}>
      <li className="sidebar-title  plain">
        <Link to={`${basePath!=="/"? basePath+"/": basePath}${item.path}`} onClick={() => setOpen(!open)}>{item.sidebarName}</Link>
      </li>

      {item.children && item.children.length && <ul className=" sidebar-content">
        {item.children.map((child, index) => <SideBarItem key={index} item={child} basePath={`${basePath!=="/"? basePath+"/": basePath}${item.path}`} />)}
      </ul>}
    </div>
  )


}

const SideBar = () => (<div className="sidebar">
  {
    RouterConfig[0].children.map((item, index) => <SideBarItem key={index} item={item} />)
  }
</div>)

export default SideBar;