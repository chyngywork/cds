import React from "react";
import {Routes, Route} from "react-router-dom"
import Contacts from "./pages/Contacts";
import Documents from "./pages/Documents";
import Home from "./pages/Home";
import News from "./pages/News";
import Partners from "./pages/Partners";
import Rates from "./pages/Rates";
import Services from "./pages/Services";

const useRoutes = () => {
    return(
        <Routes>
            <Route path="/" exact  element={<Home/>}/>
            <Route path="/services" exact element={<Services/>}/>
            <Route path="/partners" exact element={<Partners/>}/>
            <Route path="/documents" exact element={<Documents/>}/>
            <Route path="/news" exact element={<News/>}/>
            <Route path="/rates" exact element={<Rates/>}/>
            <Route path="/contacts" exact element={<Contacts/>}/>
        </Routes>
    )
}

export default useRoutes;