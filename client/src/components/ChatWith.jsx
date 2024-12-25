const ChatWith = () => {
  return (
    <div className="bg-[#D8C4B6] w-full h-16 grid grid-rows-1 grid-cols-[1fr_3fr] items-center px-2 gap-1 border  border-b-[#3E5879] cursor-pointer hover:bg-opacity-25 transition-all">
      <img
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        alt="avatar"
        className="h-12 col-span-1 rounded-full"
      />
      <div>
        <h1 className="font-semibold text-[#213555] tracking-wide ">achi milorava</h1>
        {/* <i className="text-xs text-red-600 animate-pulse">new message</i> */}
      </div>
    </div>
  );
};

export default ChatWith;
