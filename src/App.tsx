import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PageRender from "./customRouter/PageRender";
import PrivateRouter from "./customRouter/PrivateRouter";

import Login from "./pages/login";
import Register from "./pages//register";


import {useAppSelector, useAppDispatch} from "./redux/hook"
import { refreshToken } from "./redux/actions/authAction";

import { GLOBALTYPES } from "./redux/actions/globalTypes";

function App() {
  const { auth, status, modal, call }: any = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);


  return (
    <Router>

      <div className={`App ${(status || modal) && "mode"}`}>
        <div className="main">

          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;