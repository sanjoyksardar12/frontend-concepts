import Root from "../routes/root/index.js";
import Hooks from "../routes/hooks.js"
import UseDebounce from "../routes/useDebounce/index.js";



function UseSetTimeout() {
  return <>use setTimeout </>
}

const RouterConfig = [{
  path: "/",
  element: Root,
  children: [
    {
      path: "hooks",
      element: Hooks,
      sidebarName: "Hooks",
      children: [
        // {
        //   index: true,
        //   element: HooksIndex,
        //   sidebarName: "UseDebounce"
        // },
        {
          path: "use-debounce",
          element: UseDebounce,
          sidebarName: "UseDebounce"
        },
        {
          path: "use-settimeout",
          element: UseSetTimeout,
          sidebarName: "UseSetTimeout"
        }
      ]
    }
  ]
}]

export const getConfigAsRouterConfig = (config) => {
  if(!config || !config.length) return [];
  return config.map(({path, element :  Element, children = []})=>{
    return {
      path: path,
      element :  <Element/>,
      children : getConfigAsRouterConfig(children)
    }
  })
}

export default RouterConfig;