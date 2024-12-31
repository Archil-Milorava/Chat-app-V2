import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import { userStore } from "./state/useAuthStore";
import Loading from "./ui/Loading";

const App = () => {
  const { authUser, loading, getCurrentUser } = userStore();

  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  if (loading) {
    return <Loading />;
  }


  return (
    <Routes>
      <Route
        path="/profile/:as"
        element={authUser ? <Profile /> : <Navigate to="/login" />}
      />
      <Route
        path="/"
        element={authUser ? <Home /> : <Navigate to="/login" />}
      />
      <Route
        path="/login"
        element={!authUser ? <Login /> : <Navigate to="/" />}
      />
      <Route
        path="/signup"
        element={!authUser ? <SignUp /> : <Navigate to="/" />}
      />
      {/* <Route
        path="*"
        element={authUser ? <Home /> : <Navigate to="/login" />}
      /> */}
    </Routes>
  );
};

export default App;
