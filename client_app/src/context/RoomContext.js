import socketIOClient from "socket.io-client";
import { createContext } from "react";

const WS = "http://localhost:8080";

export const RoomContext = createContext(null);
const ws = socketIOClient(WS);

export const RoomProvider = ({ children }) => {
  return (
    <RoomContext.Provider
      value={{
        ws,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};
