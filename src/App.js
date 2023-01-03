import "./main.css";
import io from "socket.io-client";
import MyChat from "./MyChat";

const socket = io.connect("http://localhost:3001");

function App() {
  return (
    <div className="App">
        <MyChat socket={socket} />
    </div>
  );
}

export default App;
