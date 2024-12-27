import Conversation from "../components/Conversation";
import Sidebar from "../components/Sidebar";

const Home = () => {

  
  return (
    <main className="h-screen max-h-screen w-full max-w-full bg-[#D8C4B6] grid grid-rows-1 grid-cols-[1fr_4fr] ">
      <Sidebar />
      <Conversation />
    </main>
  );
};

export default Home;
