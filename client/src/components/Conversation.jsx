const Conversation = () => {
  return (
    <main className="px-4 h-screen max-h-screen overflow-y-scroll w-full">
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

      {/* caht sent */}

      <div className="chat chat-end">
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
    </main>
  );
};

export default Conversation;
