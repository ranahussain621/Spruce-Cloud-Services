import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Userdashboard from './screens/UserDashboard/Userdashboard'
import CspDashboard from './screens/CSPDashboard/CspDashboard'
import SuperAdmin from './screens/SuperAdmin/SuperAdmin'

export function DashboardRoutes() {
    return (
        <>
            <Routes>
                <Route path='/userdashboard' element={<Userdashboard />} />
                <Route path='/*' element={<CspDashboard />} />
                <Route path='/super-admin/*' element={<SuperAdmin />} />
            </Routes>
        </>
    )
}

export default DashboardRoutes