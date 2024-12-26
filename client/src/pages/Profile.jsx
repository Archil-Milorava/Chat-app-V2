import { Link } from "react-router";

const Profile = () => {
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

        <button className="btn btn-outline btn-error">Log Out</button>
      </div>
    </main>
  );
};

export default Profile;
