import React, { useRef } from 'react';

const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === 'function') {
      callback(isFull);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mosRequestFullscreen) {
        element.current.mosRequestFullscreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
    }
    runCb(true);
  };
  const exitFull = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullscreen) {
      document.mozCancelFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    runCb(false);
  };
  return { element, triggerFull, exitFull };
};

export default function App() {
  const onFullScreen = (isFull) => {
    console.log(isFull ? 'we are full' : 'we are small');
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullScreen);
  return (
    <div className="App">
      <div ref={element}>
        <img
          style={{ width: 200 }}
          alt="sample pic"
          src="https://pocket-syndicated-images.s3.amazonaws.com/5ff6555fbbc08.jpg"
        ></img>
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
}
