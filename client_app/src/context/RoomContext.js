import socketIOClient from "socket.io-client";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Peer from "peerjs";
import { v4 as uuidV4 } from "uuid";
const WS = "http://localhost:8080";

export const RoomContext = createContext(null);
const ws = socketIOClient(WS);

export const RoomProvider = ({ children }) => {
  const navigate = useNavigate();
  const [me, setMe] = useState();
  const [stream, setStream] = useState();

  const enterRoom = ({ roomId }) => {
    console.log({ roomId });
    navigate(`/room/${roomId}`);
  };
  const getUsers = ({ participants }) => {
    console.log({ participants });
  };
  useEffect(() => {
    const meId = uuidV4();
    const peer = new Peer(meId);
    setMe(peer);
    try {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          setStream(stream);
        });
    } catch (err) {
      console.log(err);
      console.log("err");
    }
    ws.on("room-created", enterRoom);
    ws.on("get-users", getUsers);
  }, []);
  return (
    <RoomContext.Provider
      value={{
        ws,
        me,
        stream,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};
