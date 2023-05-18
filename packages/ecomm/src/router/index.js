import { createBrowserRouter } from 'react-router-dom';
import RouteConfig, {getConfigAsRouterConfig} from "./config";


const router = createBrowserRouter(getConfigAsRouterConfig(RouteConfig))

export default router;