import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import toast from "react-hot-toast";

// http://localhost:5001/api/v1/auth/signup

const SignUp = () => {
  const [nickName, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [email, SetEmail] = useState("");
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const signUp = async () => {
    try {
      setIsLoading(true);
      await axios.post("/api/v1/auth/signup", { nickName, email, password });
      toast.success("account created");
      setIsLoading(false);
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      throw new Error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp();
  };

  return (
    <main className="h-screen max-h-screen w-full max-w-full bg-[#D8C4B6] flex items-center justify-center">
      <div
        className={`bg-[#F5EFE7] w-[30rem] h-[35rem] flex flex-col items-center justify-center space-y-4 ${
          loading && "opacity-70"
        }`}
      >
        <form
          className="flex flex-col items-center space-y-4 w-3/4"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-gray-700">Register</h2>
          <Input
            type="text"
            placeholder="Nickname"
            value={nickName}
            onChange={(e) => setNickname(e.target.value)}
            className="w-full p-2"
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
            className="w-full p-2"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2"
          />
          <Button disabled={loading} type="submit">
            {loading ? "Loading..." : "Sign Up"}
          </Button>
        </form>
        <Link to={"/login"}>Log In</Link>
      </div>
    </main>
  );
};

export default SignUp;
