import { useContext } from "react";
import { RoomContext } from "../../context/RoomContext";
import { v4 as uuidV4 } from "uuid";
export const Join = () => {
  const { ws } = useContext(RoomContext);
  const createRoom = () => {
    //const roomID = uuidV4();

    ws.emit("create-room");
  };
  const joinRoom = () => {
    // const roomID = uuidV4();

    ws.emit("join-room");
  };
  return (
    <button
      onClick={createRoom}
      className="bg-rose-400 py-2 px-8 rounded-lg text-xl hover:bg-rose-600"
    >
      Join room
    </button>
  );
};
