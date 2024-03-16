const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://avatar.iran.liara.run/public/boy?usernmae=ola"
            alt="avatar"
          />
        </div>
      </div>
      <p className={`chat-bubble text-white bg-emerald-600 `}>Hi! What's up?</p>
      <p className={`chat-footer opacity-50 text-xs flex gap-1 items-center `}>
        12:42pm
      </p>
    </div>
  );
};

export default Message;
