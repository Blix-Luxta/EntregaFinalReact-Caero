import { Route, Routes } from "react-router-dom"
import Category from "../Pages/Category/index"
import Home from "../Pages/Home/index"


function AppRoutes() {
    return <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/home" element={<Home/>}></Route>
        <Route exact path="/:categoryId" element={<Category />}></Route>
        <Route exact path='*' element={<h1>404 NOT FOUND</h1>}/>
    </Routes>
}

export default AppRoutes