import { Route, Routes, Navigate } from "react-router-dom";

const PrivateRouter = (props: any) => {
  const firstLogin = localStorage.getItem("firstLogin");
  return firstLogin ? (
    <Routes>
      <Route {...props} />{" "}
    </Routes>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRouter;