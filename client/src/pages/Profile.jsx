import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import { userStore } from "../state/useAuthStore";

//http://localhost:5001/api/v1/auth/logout

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const { authUser,updateProfile } = userStore();
  const { nickName, profilePic, createdAt } = authUser;

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

  function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImage(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
     updateProfile()
  }

  return (
    <main className="h-screen max-h-screen w-full max-w-full bg-[#D8C4B6] flex items-center justify-center">
      <div className="bg-[#F5EFE7] w-[30rem] h-[35rem] flex flex-col items-center justify-center space-y-4">
        <div className="avatar">
          <div className="w-24 rounded">
            <label htmlFor="avatar-upload">
              <img
                className="cursor-pointer hover:opacity-70 transition-all"
                src={selectedImage || profilePic || "/avatar.png"}
              />
              <input
                type="file"
                className="hidden"
                id="avatar-upload"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </label>
          </div>
        </div>

        <h1 className="text-2xl font-bold uppercase">{nickName}</h1>

        <Link to="/" className="btn btn-outline btn-success">
          Start Chat
        </Link>

        <button onClick={handleLogout} className="btn btn-outline btn-error">
          Log Out
        </button>

        <p className="text-xs">memere since | {createdAt}</p>
      </div>
    </main>
  );
};

export default Profile;
