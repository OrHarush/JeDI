import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login"
import Home from "../Pages/Home/Home"
import PageLayout from "../Components/Layout/PageLayout";

const JeDIRoutes = () => (
    <Routes>
        <Route path="/" element={<p>layout</p>}/>
            {/* <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} /> */}
    </Routes>
)

export default JeDIRoutes;