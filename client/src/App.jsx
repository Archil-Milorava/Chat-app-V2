import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import { userStore } from "./state/useAuthStore";
import { useEffect } from "react";
import Loading from "./ui/Loading";

const App = () => {
  const { authUser, loading, getCurrentUser } = userStore();


  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  if (loading) {
    return <Loading />
  }


  return (
    <Routes>
      <Route
        path="/"
        element={authUser ? <Home /> : <Navigate to="/login" />}
      />
      <Route
        path="/profile/:as"
        element={authUser ? <Profile /> : <Navigate to="/login" />}
      />
      <Route
        path="/login"
        element={!authUser ? <Login /> : <Navigate to="/" replace />}
      />
      <Route
        path="/signup"
        element={!authUser ? <SignUp /> : <Navigate to="/" />}
      />
      <Route path="*" element={authUser ? <Home /> : <Navigate to="/login" />} />
    </Routes>
  );
};

export default App;
