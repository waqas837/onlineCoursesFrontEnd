import React from 'react'
import Navbar from "./Navbar"
import FixedDrawer from "./FixedDrawer"
import {useStyles} from "./Main.Styles"
const AdminDashboard = () => {
    return (
        <div>
             <Navbar/>
             <FixedDrawer/>
        </div>
    )
}

export default AdminDashboard
