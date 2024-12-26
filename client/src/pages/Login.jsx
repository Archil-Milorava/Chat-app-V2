import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import axios from "axios";

//http://localhost:5001/api/v1/auth/login

const Login = () => {
  const [nickName, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const login = async () => {
    try {
      setLoading(true);
      await axios.post("/api/v1/auth/login", { nickName, password });
      toast.success("Logged In");
      setLoading(false);
      navigate("/")
    } catch (error) {
      toast.error(error.response.data.message);
      throw new Error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login()
  };

  return (
    <main className="h-screen max-h-screen w-full max-w-full bg-[#D8C4B6] flex items-center justify-center">
      <div className={`bg-[#F5EFE7] w-[30rem] h-[35rem] flex flex-col items-center justify-center space-y-4 ${loading ? "opacity-70" : ""}`}>
        <form
          className="flex flex-col items-center space-y-4 w-3/4"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-gray-700">Login</h2>
          <Input
            type="text"
            placeholder="Nickname"
            value={nickName}
            onChange={(e) => setNickname(e.target.value)}
            className="w-full p-2"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2"
          />
          <Button type="submit">{loading ? "Loading.." : "Log In"}</Button>
        </form>
        <Link to={"/signup"}>Create Account</Link>
      </div>
    </main>
  );
};

export default Login;
