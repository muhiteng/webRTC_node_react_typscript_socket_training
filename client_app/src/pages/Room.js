import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RoomContext } from "../context/RoomContext";
export const Room = () => {
  const { id } = useParams();
  const { ws ,me} = useContext(RoomContext);
  useEffect(() => {
    ws.emit("join-room", { roomId: id });
  }, [id]);
  return <>room id {id}</>;
};
