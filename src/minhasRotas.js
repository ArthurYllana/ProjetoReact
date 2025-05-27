import { BrowserRouter, Route, Routes } from "react-router-dom";
// Fazemos a importação de funções expecificas do react-router-dom

import Home from "./pages/Home";
import Atv01 from "./pages/Atv01";
import Atv02 from "./pages/Atv02";
import Atv03 from "./pages/Atv03";
import Atv04 from "./pages/Atv04";

export default function MinhasRotas(){
    return(
        <BrowserRouter>
            <Routes> 
                <Route path="/" element={<Home/>} />
                <Route path="/atv01" element={<Atv01 />} />
                <Route path="/atv02" element={<Atv02 />} />
                <Route path="/atv03" element={<Atv03 />} />
                <Route path="/atv04" element={<Atv04 />} />
                <Route path="/atv05" element={<Atv05 />} />
            </Routes>
        </BrowserRouter>
    );
}