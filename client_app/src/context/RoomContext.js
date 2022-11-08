import socketIOClient from "socket.io-client";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Peer from "peerjs";
import { uuid as uuidV4 } from "uuid";
const WS = "http://localhost:8080";

export const RoomContext = createContext(null);
const ws = socketIOClient(WS);

export const RoomProvider = ({ children }) => {
  const navigate = useNavigate();
  const [me, setMe] = useState();

  const enterRoom = ({ roomId }) => {
    console.log({ roomId });
    navigate(`/room/${roomId}`);
  };
  useEffect(() => {
    const meId = uuidV4();
    const peer = new Peer(meId);
    setMe(peer);
    ws.on("room-created", enterRoom);
  }, []);
  return (
    <RoomContext.Provider
      value={{
        ws,
        me,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};
