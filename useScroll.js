import React, { useEffect, useState } from 'react';

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    Y: 0,
  });
  const onscroll = () => {
    setState({ y: window.scrollY, x: window.scrollX });
    console.log('y', window.scrollY, 'x', window.scrollX);
  };
  useEffect(() => {
    window.addEventListener('scroll', onscroll);
    return () => {
      window.removeEventListener('scroll', onscroll);
    };
  }, []);
  return state;
};

export default function App() {
  const { y } = useScroll();
  return (
    <div className="App" style={{ height: '1000vh' }}>
      <h1 style={{ position: 'fixed', color: y > 100 ? 'red' : 'blue' }}>Hi</h1>
    </div>
  );
}
