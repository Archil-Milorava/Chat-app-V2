import {useNavigate} from "react-router"



const Conversation = () => {
  const navigate = useNavigate()
  return (
    <main className="px-4 h-screen max-h-screen overflow-y-scroll w-full grid grid-rows-[4fr_1fr] grid-cols-1">
      <div>
        {/* chat received */}
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <div className="chat-bubble bg-[#213555]">
            It was said that you would, destroy the Sith, not join them.
          </div>
        </div>

        {/* chat sent */}
        <div className="chat chat-end">
          <div className="chat-image avatar ">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <div className="chat-bubble bg-[#213555]">
            It was said that you would, destroy the Sith, not join them.
          </div>
        </div>
      </div>

      <div className="w-full h-full p-4 flex items-center space-x-4">
        <textarea
          className="textarea textarea-bordered w-full h-16 resize-none"
          placeholder="Type a message..."
        />
        <button className="avatar" onClick={()=> navigate('profile/as')} >
          <div className="w-10 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </button>
        <button className="btn btn-primary">Send</button>
      </div>
    </main>
  );
};

export default Conversation;
