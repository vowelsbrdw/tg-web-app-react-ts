import React from "react"

import { Routes, Route, Navigate } from "react-router-dom"
import { publicRoutes } from "../routes"
const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(({path, component})=> 
                <Route
                    path={path}
                    element={component}
                />
            )}
            <Route 
                path='*'
                element={<Navigate to='/'/>}
            />
        </Routes>
    )
}

export default AppRouter