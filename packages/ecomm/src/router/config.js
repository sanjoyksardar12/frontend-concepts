import Root from "../routes/root/index.js";
import Hooks from "../routes/hooks.js"
import UseDebounceRoute from "../routes/useDebounceRoute/index.js";
import HooksLifeCycleRoute from "../routes/hooksLifeCycleRoute/index.js";



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
          path: "hooks-life-cycle",
          element: HooksLifeCycleRoute,
          sidebarName: "Hook Life Cycle"
        },
        {
          path: "use-debounce",
          element: UseDebounceRoute,
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