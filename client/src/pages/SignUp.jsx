import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { Link } from "react-router";

const SignUp = () => {
  const [nickName, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [email, SetEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nickname:", nickName);
    console.log("Password:", password);
  };

  return (
    <main className="h-screen max-h-screen w-full max-w-full bg-[#D8C4B6] flex items-center justify-center">
      <div className="bg-[#F5EFE7] w-[30rem] h-[35rem] flex flex-col items-center justify-center space-y-4">
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
          <Button type="submit" >
            Sign Up
          </Button>
        </form>
        <Link to={"/login"}>Log In</Link>
      </div>
    </main>
  );
};

export default SignUp;
