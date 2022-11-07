import { useContext } from "react";
import { RoomContext } from "../../context/RoomContext";
export const Join = () => {
  const { ws } = useContext(RoomContext);

  return (
    <button className="bg-rose-400 py-2 px-8 rounded-lg text-xl hover:bg-rose-600">
      Join room
    </button>
  );
};
