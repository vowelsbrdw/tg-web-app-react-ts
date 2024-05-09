import Start from "./pages/Start";
import { MAIN_ROUTE } from "./utils/consts";

type route = {
    path: String,
    component: React.ReactNode
}

type publicRoutes = route[]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        component: <Start/>
    }
]