import React, { useState, useRef } from "react";
import image from "../../../public/quotes.svg"

const VideoWithText = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row justify-between max-w-screen-xl w-full">
        {/* Text Section */}
        <div className="w-1/2 p-8 flex flex-col justify-between py-14 space-y-8">
          <img src={image} alt="image" className="w-8 -scale-x-90" />
          {/* <h2 className="text-3xl font-semibold text-gray-800">"</h2> */}
          <p className=" text-2xl text-gray-500 font-semibold">
            Financial literacy is the key to unlocking financial freedom.
            Knowledge is the foundation upon which smart financial decisions are
            built.
          </p>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 p-5 border border-zinc-400 rounded-full bg-gray-500"></div>
            <div>
              <h2 className="font-bold text-lg">Mohan Sharma,</h2>
              <p className="text-gray-500"> RBI Chief Financial Officer</p>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="w-1/3 relative bg-gray-200 rounded-3xl overflow-hidden m-10 ">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            controls={isPlaying}
            poster="https://via.placeholder.com/600x400" // Placeholder image
          >
            <source src="your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {!isPlaying && (
            <button
              onClick={handlePlayPause}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-blue-500 p-4 rounded-full opacity-75 hover:opacity-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path d="M8 5v14l11-7z"></path>
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoWithText;
