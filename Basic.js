import React from "react";

import { HashRouter, BrowserRouter, Route, Routes,  } from "react-router-dom";
import One from "./One";
import Two from "./Two";

function Basic () {
    return(
        
        <HashRouter>
          <Routes>
              <Route path="/one" element={<One />}></Route>
              <Route path="/two" element={<Two />}></Route>
          </Routes>
        </HashRouter>
        
    );
}
export default Basic ;
