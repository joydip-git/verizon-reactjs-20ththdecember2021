import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { appRoutes } from './appRoutes'

const NavigationRoutes = () => {
    return (
        <Routes>
            {
                appRoutes.map(
                    r => <Route key={r.id} element={<r.component />} path={r.path} />
                )
            }
        </Routes>
    )
}

export default NavigationRoutes

