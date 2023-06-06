import Root from "../routes/root/index.js";
import Hooks from "../routes/hooks.js"
import JavaScript from "../routes/javascript.js"
import UseDebounceRoute from "../routes/useDebounceRoute";
import HooksLifeCycleRoute from "../routes/hooksLifeCycleRoute";
import UseSetTimeoutRoute from "../routes/useSetTimeoutRoute";
import UseIntervalRoute from "../routes/useIntervalRoute";
import DebounceRoute from "../routes/debounceRoute";
import ThrottleRoute from "../routes/throttleRoute";


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
          path: "use-interval",
          element: UseIntervalRoute,
          sidebarName: "UseInterval"
        },
        {
          path: "use-settimeout",
          element: UseSetTimeoutRoute,
          sidebarName: "UseTimeout"
        },
      ]
    },{
        path: "javascript",
        element: JavaScript,
        sidebarName: "Java Script",
        children: [
          {
            path: "debounce",
            element: DebounceRoute,
            sidebarName: "Debounce"
          },
          {
            path: "throttle",
            element: ThrottleRoute,
            sidebarName: "Throttle"
          },
          {
            path: "interval",
            element: UseSetTimeoutRoute,
            sidebarName: "Interval"
          },
        ]
    }
  ]
}]

export const getConfigAsRouterConfig = (config) => {
  if (!config || !config.length) return [];
  return config.map(({ path, element: Element, children = [] }) => {
    return {
      path: path,
      element: <Element />,
      children: getConfigAsRouterConfig(children)
    }
  })
}

export default RouterConfig;