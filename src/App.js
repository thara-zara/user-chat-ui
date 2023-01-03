import "./main.css";
import io from "socket.io-client";
import MyChat from "./MyChat";

const socket = io.connect("https://my-chat-app-back.onrender.com");

function App() {
  return (
    <div className="App">
        <MyChat socket={socket} />
    </div>
  );
}

export default App;
