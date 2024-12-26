import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/signUp";
import Profile from "./pages/Profile";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/profile/:id",
    element: <Profile />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />;
      <Toaster />
    </>
  );
};

export default App;
