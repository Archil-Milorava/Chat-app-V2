import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";

//http://localhost:5001/api/v1/auth/logout

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const logOut = async () => {
    try {
      setLoading(true);
      await axios.post("/api/v1/auth/logout", null, { withCredentials: true });
      toast.success("Logged out");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.message);
      throw new Error(error);
    }
  };

  const handleLogout = () => {
    logOut();
    navigate("/login");
  };

  return (
    <main className="h-screen max-h-screen w-full max-w-full bg-[#D8C4B6] flex items-center justify-center">
      <div className="bg-[#F5EFE7] w-[30rem] h-[35rem] flex flex-col items-center justify-center space-y-4">
        <div className="avatar">
          <div className="w-24 rounded">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>

        <h1 className="text-2xl font-bold uppercase">achi milorava</h1>

        <Link to="/" className="btn btn-outline btn-success">
          Start Chat
        </Link>

        <button onClick={handleLogout} className="btn btn-outline btn-error">
          Log Out
        </button>
      </div>
    </main>
  );
};

export default Profile;
