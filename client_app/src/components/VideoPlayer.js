import { useEffect, useRef } from "react";

export const VideoPlayer = ({ stream }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) videoRef.current.srcObject = stream;
  }, [stream]);
  return (
    <div>
      <video  ref={videoRef} autoPlay muted={true} />
    </div>
  );
};
