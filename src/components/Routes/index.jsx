import { Route, Routes } from "react-router-dom"
import Category from "../Pages/Category/index"
import Home from "../Pages/Home/index"

function AppRoutes() {
    return <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:categoryId" element={<Category />}></Route>
    </Routes>
}

export default AppRoutes