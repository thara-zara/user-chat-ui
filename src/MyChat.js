import React, { useEffect, useState } from "react";
import "./main.css"

function MyChat({ socket }) {
  const [newMsg, setNewMsg] = useState("");
  const[newUser,setNewUser] =useState("");
  const [msgList, setMessageList] = useState([]);

  const id = 1;

  const sendMsg = async () => {
    const msgData = {
      name:newUser,
      msg: newMsg
    };
    await socket.emit("send_message", msgData);
};

useEffect(() => {
  socket.on("receive_message", (data) => {
    setMessageList((list) => [...list, data]);
  });
}, [socket]);

  return (
  <div className="container">
    <div className="type">
      <div className="type-head">
          <p>hey lets make a chat</p>
      </div>
        <div>
        <input type="text" placeholder='name' onChange={(event) =>{setNewUser(event.target.value);}}/>
        </div>
        <div>
        <input type="text" placeholder='msg' onChange={(event) =>{setNewMsg(event.target.value);}}/>
        </div>
        <button onClick={sendMsg}>send</button>
    </div>
    <div className="chat">
      <div className="chat-head">
        <p>your chat is here</p>
      </div>
      <div className="chat-box">
              {msgList.map((messages) => {
                return (
                  <div className="chat-body" 
                  id={newUser === messages.name ? "you" : "other"}
                  >
                    <div className="msg">
                      <span>{messages.msg}</span>
                      <p>{messages.name}</p>
                    </div>
                    
                  </div>
                );
              })}
      </div>
    </div>
  </div>
  );
}

export default MyChat;
